# Image Setup Guide

Your website is now configured to display your professional photos! Here's how to set them up:

## Image Files Needed

Save the three photos you provided to: `public/images/`

### 1. **shadrack-official.jpg** (First Image - Dark Suit)
- **Usage**: Hero section (main homepage - left side)
- **Description**: Formal portrait in dark suit - your official professional photo
- **Placement**: `public/images/shadrack-official.jpg`

### 2. **shadrack-casual.jpg** (Third Image - White Shirt)
- **Usage**: About/Intro section (Meet Shadrack section)
- **Description**: Leadership portrait in white shirt with blazer - approachable professional
- **Placement**: `public/images/shadrack-casual.jpg`

### 3. **shadrack-profile.jpg** (Second Image - On Stool)
- **Usage**: Gallery, Speaker Section, and other card placeholders
- **Description**: Dynamic portrait on stool - versatile for various sections
- **Placement**: `public/images/shadrack-profile.jpg`

---

## How to Save Images

### Option 1: Direct File Copy (Easiest)
1. Find the three images from the conversation attachment/chat
2. Right-click each image and select "Save image as..."
3. Navigate to: `c:\Users\Kaptain\Documents\Avion creative HUB\shadrack-portfolio\public\images\`
4. Save with exact filenames shown above (respect the naming!)

### Option 2: Drag & Drop
1. Open file explorer to `public\images\` folder
2. Open another window with the images
3. Drag each image to the `public\images\` folder
4. Rename to match the filenames above

### Option 3: Terminal
```powershell
# After saving images to a temp location, move them
Move-Item "C:\path\to\image1.jpg" "c:\Users\Kaptain\Documents\Avion creative HUB\shadrack-portfolio\public\images\shadrack-official.jpg"
Move-Item "C:\path\to\image2.jpg" "c:\Users\Kaptain\Documents\Avion creative HUB\shadrack-portfolio\public\images\shadrack-casual.jpg"
Move-Item "C:\path\to\image3.jpg" "c:\Users\Kaptain\Documents\Avion creative HUB\shadrack-portfolio\public\images\shadrack-profile.jpg"
```

---

## Image Placement Summary

| Section | Image Used | Component |
|---------|-----------|-----------|
| **Hero (Homepage)** | shadrack-official.jpg | Right side portrait |
| **About/Intro** | shadrack-casual.jpg | Meet Shadrack section |
| **Gallery** | shadrack-profile.jpg | Gallery cards (positions 1, 4, 6) |
| **Speaker Section** | shadrack-profile.jpg | Right side of Speaking Expertise |

---

## Code References

### Hero.tsx (Line ~230-240)
Uses: `/images/shadrack-official.jpg`

### Intro.tsx (Line ~160-170)
Uses: `/images/shadrack-casual.jpg`

### SpeakerSection.tsx (Line ~70-85)
Uses: `/images/shadrack-profile.jpg`

### GalleryStrip.tsx (Line ~10-20)
Uses: `/images/shadrack-profile.jpg` (multiple positions)

---

## Testing

After saving images:
1. Go to `http://localhost:3000` (make sure your dev server is running)
2. Images should automatically display
3. Check mobile version to ensure responsive display
4. Scroll through different sections to see all images in context

If images don't appear:
1. Verify filenames match exactly (case-sensitive on Linux/Mac)
2. Check file format is JPG/PNG
3. Ensure files are in `public/images/` folder (not subdirectories)
4. Restart the dev server

---

**Questions?** All components are pre-configured. Just save the files with the correct names!
