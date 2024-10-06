import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import Donation from "@/app/lib/models/donation";
import axios from "axios";

export async function POST (request: NextRequest, response: NextResponse) {
    try {
        const { reference } = await request.json();
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
        
        const donation: any = await Donation.find({reference})
        if (!donation) {
            return NextResponse.json({message: "Donation not found"}, {status: 404})
        }
        
        if (data.status !== 'success') {
            return NextResponse.json({message: "Donation verification failed"}, {status: 400})
        }
        
        const updatedDonation = await Donation.findOneAndUpdate(
            { reference },
            { status: 'success' }
        );

        return NextResponse.json({
            message: "success",
            donation: updatedDonation,
        }, {status: 200})
    } catch (e: any) {
        return NextResponse.json({message: e.message},{ status: 400 })
    }
}