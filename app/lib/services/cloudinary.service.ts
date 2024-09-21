import { cloudinary } from "@/app/config/cloudinary";

export default class CloudinaryService {
  public async upload(fileUri: string, fileName?: string, options: any = {}) {
    const defaultOptions = {
      invalidate: true,
      resource_type: "auto",
      folder: "lodge_finder_vaccancies",
      use_filename: true,
      ...options,
    };

    if (fileName) {
      defaultOptions.filename_override = fileName;
    }

    try {
      const result = await cloudinary.uploader.upload(fileUri, defaultOptions);
      return { success: true, result };
    } catch (error) {
      return { success: false, error };
    }
  }

  async delete() {
    // Implement delete functionality
  }
}

export const cloudinaryService = new CloudinaryService();
