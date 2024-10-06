import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import connectToDB from "@/app/lib/db";
import Donation from "@/app/lib/models/donation";
import axios from "axios";

export async function POST (request: NextRequest, response: NextResponse) {
    try {
        connectToDB()

        const requestBody = await request.json()

        const session = await getSession();

        if(!session) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }

        const donation = new Donation(requestBody);
        
        const response = await axios.post('https://api.paystack.co/transaction/initialize',
            {
                full_name: donation.fullName,
                email: requestBody?.email,
                amount: requestBody?.amount! * 100,
                callback_url: process.env.PAYSTACK_CALLBACK_URL_DONATION
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            }
        );

        const authorizationUrl = response?.data?.data?.authorization_url;
        const reference = response?.data?.data?.reference

        if(!authorizationUrl || !reference) {
            return NextResponse.json({message: "Failed to initialize transaction"}, {status: 400})
        }

        donation.reference = reference;
        await donation.save();

        return NextResponse.json(
            { authorizationUrl, reference },
            {status: 201}
        )
    } catch (e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}