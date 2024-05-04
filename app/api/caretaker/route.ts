import { NextRequest, NextResponse } from "next/server";
import Caretaker from "@/app/lib/models/caretaker";
import connectToDB from "@/app/lib/db";

export async function GET(request: NextRequest, response: NextResponse) {
    try{
        await connectToDB()
        const caretakers = await Caretaker.find();
        console.log(caretakers)
        return NextResponse.json({
            caretakers
        })
    } catch(e: any) {
        throw new Error(e)
    }
}

export async function POST(request: NextRequest, response: NextResponse) {
    try{
        connectToDB()
        const requestBody = await request.json()
        console.log(requestBody)
        const newCaretaker = new Caretaker(requestBody)
        console.log("here")
        await newCaretaker.save();
        console.log(newCaretaker)
        if(!newCaretaker) return response.status
        return NextResponse.json({caretaker: newCaretaker}, {status: 201})
    } catch(e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}