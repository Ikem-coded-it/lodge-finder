import { NextRequest, NextResponse } from "next/server";
import Vacancy from "@/app/lib/models/vacancy";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";

export async function POST(request: NextRequest, response: NextResponse) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{ status: 401 });
    }
    try{
        connectToDB()
        const requestBody = await request.json()
        console.log(requestBody)
        const newVacancy = new Vacancy(requestBody)
        console.log("here")
        await newVacancy.save();
        console.log(newVacancy)
        if(!newVacancy) return response.status
        return NextResponse.json({vacancy: newVacancy}, {status: 201})
    } catch(e: any) {
        return NextResponse.json({message: e.message},{ status: 400 });
    }
}