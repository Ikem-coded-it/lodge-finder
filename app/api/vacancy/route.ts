import { NextRequest, NextResponse } from "next/server";
import Vacancy from "@/app/lib/models/vacancy";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { cloudinaryService } from "@/app/lib/services/cloudinary.service";
import $http from "@/app/lib/services/$http";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectToDB();

    const vaccancies = await Vacancy.find();
    // auth0|66a652317686a649a4dc91c3
    console.log("vaccancies", vaccancies);
    return NextResponse.json({ data: vaccancies });
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
    const images = requestBody?.images;

    if (images) {
      // for (const image in images) {
      //   const { result } = (await cloudinaryService.upload(
      //     images[image]
      //   )) as any;

      //   images[image] = result.secure_url;
      // }

      requestBody.images = {};
    }

    const newVacancy = new Vacancy(requestBody);

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
