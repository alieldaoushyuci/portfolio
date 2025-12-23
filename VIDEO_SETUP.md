# Background Video Setup Instructions

The background video is configured to use an external URL for deployment.

## Quick Setup (One-Time)

1. **Upload your video to a free CDN service:**
   - **Cloudinary** (Recommended - free tier): https://cloudinary.com
     - Sign up (free)
     - Upload your video file: `vecteezy_circuit-data-neural-network-ai-technology-cloud-computing_8800860.mp4`
     - Copy the video URL
   
   - **Alternative**: AWS S3, Vimeo (unlisted), or any CDN

2. **Set the environment variable in your deployment platform:**
   
   - **For Vercel/Netlify/GitHub Pages**: Add this environment variable:
     ```
     NEXT_PUBLIC_BACKGROUND_VIDEO_URL=https://your-cloudinary-url.com/video.mp4
     ```
   
   - **For local development**: Create `.env.local` file in the root directory:
     ```
     NEXT_PUBLIC_BACKGROUND_VIDEO_URL=https://your-cloudinary-url.com/video.mp4
     ```

3. **Rebuild and deploy** - The video will automatically use the external URL.

## How It Works

- The code checks for `NEXT_PUBLIC_BACKGROUND_VIDEO_URL` environment variable
- If set, it uses that URL (for production)
- If not set, it falls back to local file (for development only)
- The local video file is gitignored, so it won't be in your repository

## That's It!

Once you set the environment variable in your deployment platform, you'll never need to touch the code again. The video will work automatically in production.

