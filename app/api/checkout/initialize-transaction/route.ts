import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import connectToDB from "@/app/lib/db";
import Transaction from "@/app/lib/models/transaction";
import packages from "@/app/lib/store/credit-packages";
import axios from "axios";

export async function POST (request: NextRequest, response: NextResponse) {
    try {
        connectToDB()

        const requestBody = await request.json()

        const chosenPackage = packages.find(x => x.id == requestBody?.packageId)
        const session = await getSession();
        const transaction = new Transaction({
            userId: session?.user?.sub,
            packageId: chosenPackage?.id,
            amount: chosenPackage?.price
        });
        
        const response = await axios.post('https://api.paystack.co/transaction/initialize',
            {
                full_name: session?.user?.name,
                email: session?.user?.email,
                amount: chosenPackage?.price! * 100,
                callback_url: process.env.PAYSTACK_CALLBACK_URL
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            }
        );
        const authorizationUrl = response?.data?.data?.authorization_url;
        transaction.reference = response?.data?.data?.reference;
        await transaction.save();
        return NextResponse.json(
            { authorizationUrl, reference: response.data.data.reference },
            {status: 201}
        )
    } catch (e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}