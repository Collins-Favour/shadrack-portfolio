# Setup Guide - Portfolio Updates

## Recent Enhancements

### ✅ Completed Updates

1. **Real-Time Admin Dashboard**
   - Fetches live data from your API endpoints (`/api/bookings`, `/api/contact`, `/api/testimonials`)
   - Auto-refreshes every 5 seconds with real-time updates
   - Shows total bookings, pending requests, messages, and page views
   - Displays recent bookings and contact messages in formatted tables
   - Location: `/admin` (password: `admin123`)

2. **Enhanced Animations Throughout**
   - Hero section: Staggered letter animations, parallax effects, scaling elements
   - Navigation: Smooth slide-in animations, mobile menu with staggered items
   - Intro section: Scroll-triggered animations, rotating badges, border glows
   - CTA section: Animated backgrounds, staggered content reveals
   - All sections have entrance animations similar to Lando Norris website

3. **Admin Dashboard Access**
   - Added discrete admin link at footer bottom
   - Text: "Admin: Dashboard Access"
   - Easily accessible but not intrusive

4. **Two-Column Hero Layout**
   - Left: Text content with animated headlines, stats, and CTAs
   - Right: Image placeholder ready for profile photo
   - Includes floating animation elements and border glows

### 📸 Adding Your Profile Photo

**Step 1: Save Your Photo**
1. Open the attached photo in an image editor (e.g., Photoshop, GIMP, or online editor)
2. **IMPORTANT**: Rotate it 90° clockwise to make it upright (currently it's rotated 90° counter-clockwise)
3. Save as PNG or JPG with good quality
4. Name it: `shadrack.jpg` or `shadrack.png`

**Step 2: Place in Project**
1. Save the photo to: `public/images/shadrack.jpg`
2. The folder should already exist

**Step 3: Enable in Code**
Open `src/components/sections/Hero.tsx` and uncomment these lines (around line 265):

```tsx
{/* <Image
    src="/images/shadrack.jpg"
    alt="Shadrack"
    fill
    className="object-cover rotate-0"
    priority
/> */}
```

Change to:

```tsx
<Image
    src="/images/shadrack.jpg"
    alt="Shadrack"
    fill
    className="object-cover rotate-0"
    priority
/>
```

And comment out the placeholder div above it.

### 🎬 Animation Features

**Page Opening Animations:**
- Navigation slides down from top
- Logo fades in with movement
- Menu items stagger in
- Hero section has sequential content reveals

**Scroll-Based Animations:**
- Elements fade in and scale as you scroll
- Text animates letter-by-letter in Hero
- Staggered animations on role tags
- Border glows and pulsing effects

**Interactive Animations:**
- Hover effects on buttons (scale up, shadow)
- Hover effects on cards (lift, background change)
- Animated underlines on nav links
- Rotating badges and icons

**Continuous Animations:**
- Pulsing accent colors
- Floating background elements
- Rotating accent words in headlines
- Scroll indicator at bottom of Hero

### 🔧 Technical Details

**Libraries Used:**
- `framer-motion` for animations
- `react-intersection-observer` for scroll-triggered animations
- Next.js 13+ for image optimization

**Admin Dashboard Data Flow:**
```
Website (bookings/messages/testimonials) 
    ↓
API Routes (/api/bookings, /api/contact, /api/testimonials)
    ↓
Admin Dashboard
    ↓
Real-time Updates (5-second refresh)
```

### 🚀 Next Steps

1. **Add the profile photo** using the steps above
2. **Test the admin dashboard** by logging in with password `admin123`
3. **Check animations** by scrolling through the site
4. **Update API endpoints** if your data structure differs from the expected format

### 📝 Customization Options

**Adjust Animation Speed:**
Edit duration values in component files (currently 0.6-0.8s)

**Change Refresh Interval:**
In `src/app/admin/page.tsx`, line ~63:
```tsx
const interval = setInterval(fetchDashboardData, 5000) // Change 5000 to desired milliseconds
```

**Modify Animation Easing:**
Search for `ease: [0.34, 1.56, 0.64, 1]` to adjust cubic bezier timing

### 🎨 Color & Styling

All animations use your existing color scheme:
- Primary accent color for highlights
- Black/white for contrast
- Smooth transitions and blur effects for depth

---

**Questions?** Check the component files or reach out for adjustments!
