import cloudinary from '@/lib/claudinary'
import { NextResponse } from 'next/server';



export async function GET() {

  try{
    const resources = await cloudinary.search
      .expression('folder:Foods')
      .sort_by('public_id', 'asc')
      .execute()
    
    return NextResponse.json(resources.resources)
  }
  catch(err){
   console.error("Error fetching the Data ", err);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images from Cloudinary.' },
      { status: 500 }
    );
   
  }
}


