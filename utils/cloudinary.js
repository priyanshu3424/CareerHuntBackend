import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dvjw0htnp',
    api_key: process.env.CLOUDINARY_API_KEY || '688535396411189',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'pEzc4xr8WZiK-_Tlpj4XEO257oI'
});

export default cloudinary;
