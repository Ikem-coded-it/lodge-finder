import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import connectToDB from "@/app/lib/db";
import Transaction from "@/app/lib/models/transaction";
import Caretaker from "@/app/lib/models/caretaker";
import packages from "@/app/lib/store/credit-packages";
import axios from "axios";

export async function POST (request: NextRequest, response: NextResponse) {
    try {
        const { reference, trxref } = await request.json();
        if (!reference) {
            return NextResponse.json({message: "Transaction reference is required"}, {status: 400})
        }

        const response = await axios.get(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        });

        const { data } = response.data;

        connectToDB()
        const session = await getSession()
        
        const transaction: any = await Transaction.find({reference})
        if (!transaction) {
            return NextResponse.json({message: "Transaction not found"}, {status: 404})
        }
        
        if (data.status !== 'success') {
            return NextResponse.json({message: "Payment verification failed"}, {status: 400})
        }
        
        const updatedTransaction = await Transaction.findOneAndUpdate(
            { reference },
            { status: 'success' }
        );

        const packagePlan = packages.find(x => x?.id == updatedTransaction?.packageId)

        if(!packagePlan) {
            return NextResponse.json({message: "Credit plan not found"}, {status: 404})
        }

        const caretaker = await Caretaker.findOne({reference: session?.user?.sub})
        if(!caretaker) {
            return NextResponse.json({message: "Caretaker not found"}, {status: 404})
        }
        caretaker.credits += packagePlan?.credits
        await caretaker.save()

        return NextResponse.json({
            message: "success",
            transaction: updatedTransaction,
            credits: caretaker?.credits
        }, {status: 200})
    } catch (e: any) {
        return NextResponse.json({message: e.message},{ status: 400 })
    }
}