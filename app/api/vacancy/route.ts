import { NextRequest, NextResponse } from "next/server";
import Vacancy from "@/app/lib/models/vacancy";
import connectToDB from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { cloudinaryService } from "@/app/lib/services/cloudinary.service";
import $http from "@/app/lib/services/$http";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    connectToDB();

    const vaccancies = await Vacancy.find();

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
    connectToDB();

    const requestBody = await request.json();
    // requestBody.caretaker_sub = session?.user?.sub;
    const images = requestBody?.images;
    console.log("reqbody", requestBody);

    // return NextResponse.json({ data: requestBody });

    if (images) {
      for (const image in images) {
        console.log("result");

        // const res = await $http.post("/api/clodinary", { file: images[image] })
        const { result } = (await cloudinaryService.upload(
          images[image]
        )) as any;

        images[image] = result.secure_url;
      }

      // return NextResponse.json({ res: images });
      requestBody.images = images;
    }

    // return NextResponse.json({ res: requestBody });
    // console.log(requestBody);
    const newVacancy = new Vacancy(requestBody);
    console.log("here");
    await newVacancy.save();
    console.log(newVacancy);
    if (!newVacancy)
      return NextResponse.json(
        { message: "Could not create vacancy" },
        { status: 400 }
      );
    return NextResponse.json({ vacancy: newVacancy }, { status: 201 });
  } catch (e: any) {
    console.log("error", e);
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
