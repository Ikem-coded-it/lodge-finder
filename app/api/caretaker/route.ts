import { NextRequest, NextResponse } from "next/server";
import Caretaker from "@/app/lib/models/caretaker";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectToDB();
    const caretakers = await Caretaker.find();
    console.log(caretakers);
    return NextResponse.json({
      caretakers,
    });
  } catch (e: any) {
    console.log("An error occured here", e.message);
    throw new Error(e);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{ status: 401 });
    }
    try{
        connectToDB()
        const requestBody = await request.json()
        const newCaretaker = new Caretaker(requestBody)
        await newCaretaker.save();
        // if(!newCaretaker) return response.status
        return NextResponse.json({caretaker: newCaretaker}, {status: 201})
    } catch(e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}
