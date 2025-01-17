'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary'


const page = () => {
  return (
    <div>

      <CldImage
        src="cld-sample-4" // Use this sample image or upload your own via the Media Explorer
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        alt=''
        crop={{
          type: 'auto',
          source: true
        }}
      />
    </div>
  )
}

export default page