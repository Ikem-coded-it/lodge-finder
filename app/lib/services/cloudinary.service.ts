import { toast } from "react-toastify";
import { cloudinary } from "@/app/config/cloudinary";

export default class CloudinaryService {
  public async upload(fileUri: string, fileName?: string) {
    const options = {
      invalidate: true,
      resource_type: "auto",
      // filename_override: fileName,
      folder: "lodge_finder_vaccancies", // any sub-folder name in your cloud
      use_filename: true,
    };

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        //@ts-ignore
        .upload(fileUri, options)
        .then((result) => {
          resolve({ success: true, result });
        })
        .catch((error) => {
          reject({ success: false, error });
        });
    });
  }

  async delete() {}
}

export const cloudinaryService = new CloudinaryService();
