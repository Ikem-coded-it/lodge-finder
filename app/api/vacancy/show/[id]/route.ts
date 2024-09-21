import connectToDB from "@/app/lib/db";
import Vacancy from "@/app/lib/models/vacancy";
import { getSession } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectToDB();

    const vacancy = await Vacancy.findById(params.id);

    if (!vacancy) {
      return NextResponse.json(
        { message: "Vacancy not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: vacancy }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
