import {v2 as cloudinary} from 'cloudinary';

export default class CloudinaryService{
          
    static config = cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET
    });

    async upload() {

    }

    async delete() {
        
    }
}