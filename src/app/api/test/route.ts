import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';


export async function GET() {
  
  // Configure Cloudinary
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure:true
  });
  
  try {
    // Fetch resources from the 'Foods' folder
    const response = await cloudinary.search
      .expression('folder:Foods') // Specify the folder
      .sort_by('public_id', 'desc') // Sort by public_id in descending order
      .max_results(30) // Maximum results to fetch (adjust as needed)
      .execute();
      
    // Return the resources
    return NextResponse.json({
      success: true,
      data: response.resources, // Array of image objects
    });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images from Cloudinary.' },
      { status: 500 }
    );
  }
}
