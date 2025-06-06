import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryService } from "@/app/lib/services/cloudinary.service";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    return NextResponse.json({
      message: "it worked",
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({error: e.message},{ status: 400 });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    return NextResponse.json({
      message: "here",
    });
    const body = await request.json();

    // const res = await cloudinaryService.upload(body.file);

    // const result = await cloudinary.uploader.upload(file, options);
    // const body = await request.formData();

    console.log("req", body);

    // return NextResponse.json({
    //   data: body,
    // });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({error: e.message},{ status: 400 });
  }
}
