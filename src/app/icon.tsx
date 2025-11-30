// Next.js 15 will automatically use /logo.png from public/ folder as favicon
// If logo.png exists, it will be used. Otherwise, this dynamic icon will be generated.
// To use your avatar logo, simply place logo.png in the public/ folder.

import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation (fallback if logo.png doesn't exist)
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '50%',
        }}
      >
        YB
      </div>
    ),
    {
      ...size,
    }
  )
}

