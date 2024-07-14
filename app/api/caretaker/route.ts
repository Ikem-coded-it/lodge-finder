import { NextRequest, NextResponse } from "next/server";
import Caretaker from "@/app/lib/models/caretaker";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    if (query == "all") {
      await connectToDB();
      const caretakers = await Caretaker.find();
      return NextResponse.json({
        caretakers,
      });
    }

    if (query == "me") {
      const session = await getSession()
      await connectToDB();
      const caretaker = await Caretaker.findOne({reference: session?.user?.sub})
      if(!caretaker) return NextResponse.json({message: "Caretaker not found"},{ status: 404 });
      return NextResponse.json({
          caretaker,
      });
    }
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
        requestBody.reference = session?.user?.sub
        const newCaretaker = new Caretaker(requestBody)
        await newCaretaker.save();
        return NextResponse.json({caretaker: newCaretaker}, {status: 201})
    } catch(e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}
