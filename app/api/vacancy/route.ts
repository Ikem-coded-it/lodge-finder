import { NextRequest, NextResponse } from "next/server";
import Vacancy from "@/app/lib/models/vacancy";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { cloudinaryService } from "@/app/lib/services/cloudinary.service";
import $http from "@/app/lib/services/$http";
import { limit } from "@/app/lib/utils/plimit";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 1; // Number of results per page
    const skip = (page - 1) * limit;

    const totalDocuments = await Vacancy.countDocuments();
    const remainingDocuments = totalDocuments - page * limit;

    const vaccancies = await Vacancy.find().skip(skip).limit(limit);
    return NextResponse.json({
      data: vaccancies,
      totalDocuments,
      remainingDocuments,
    });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDB();

    const requestBody = await request.json();
    requestBody.caretaker_sub = session?.user?.sub;
    const images = requestBody?.images as Record<string, string>;

    if (images) {
      for (const key in images) {
        const { result } = await cloudinaryService.upload(images[key]);
        images[key] = result?.secure_url as string;
      }
      requestBody.images = images;
    }

    const newVacancy = new Vacancy(requestBody);
    await newVacancy.save();

    if (!newVacancy)
      return NextResponse.json(
        { message: "Could not create vacancy" },
        { status: 400 }
      );
    console.log("newVacancy", newVacancy);
    return NextResponse.json({ vacancy: newVacancy }, { status: 201 });
  } catch (e: any) {
    console.log("error", e);
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
