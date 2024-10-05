import connectToDB from "@/app/lib/db";
import Vacancy from "@/app/lib/models/vacancy";
import { cloudinaryService } from "@/app/lib/services/cloudinary.service";
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

    const vacancy = await Vacancy.find({ caretaker_sub: params.id }).sort({
      createdAt: -1,
    });

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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectToDB();

    const updatedData = await request.json();
    // Check and upload images if necessary
    if (updatedData.images) {
      for (const key in updatedData.images) {
        const imageData = updatedData.images[key];
        if (imageData && !imageData.startsWith("https://res.cloudinary.com")) {
          try {
            const uploadedUrl = await cloudinaryService.upload(imageData);
            updatedData.images[key] = uploadedUrl;
          } catch (error) {
            console.error(`Error uploading image for ${key}:`, error);
            // You might want to handle this error differently, e.g., return an error response
          }
        }
      }
    }

    const vacancy = await Vacancy.findByIdAndUpdate(params.id, updatedData, {
      new: true,
    });

    if (!vacancy) {
      return NextResponse.json(
        { message: "Vacancy could not be found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: vacancy }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
