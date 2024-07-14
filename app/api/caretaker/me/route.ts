import { NextRequest, NextResponse } from "next/server";
import Caretaker from "@/app/lib/models/caretaker";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const session = await getSession()
    await connectToDB();
    const caretaker = await Caretaker.findOne({reference: session?.user?.sub})
    if(!caretaker) return NextResponse.json({message: "Caretaker not found"},{ status: 404 });
    return NextResponse.json({
        caretaker,
    });
  } catch (e: any) {
    console.log(e)
    throw new Error(e);
  }
}