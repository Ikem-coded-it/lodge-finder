import connectToDB from "@/app/lib/db";
import Vacancy from "@/app/lib/models/vacancy";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const vacancy = await Vacancy.deleteOne({ _id: params.id });

    return NextResponse.json({ data: vacancy }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
