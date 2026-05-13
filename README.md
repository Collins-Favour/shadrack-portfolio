# Shadrack G Mahinda - Premium Portfolio Website

A production-ready, fully responsive, and beautifully animated portfolio website for Shadrack G Mahinda, featuring booking management, analytics dashboard, and admin panel.

## 🎯 Features

### Frontend
- **Cinematic Hero Section** with smooth animations
- **Fully Responsive Design** - mobile-first approach
- **Smooth Animations** powered by Framer Motion and GSAP
- **Multiple Pages**: Home, About, Contact, Booking, Admin Dashboard
- **Professional Design System** with gold/black/white aesthetic
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with lazy loading and code splitting

### Core Pages
1. **Homepage** - Hero section, intro, highlights, testimonials, gallery, statistics, CTA
2. **About Page** - Biography, speaking expertise, leadership impact, timeline
3. **Contact Page** - Contact form with anonymous messaging option, contact details
4. **Booking System** - Multi-step booking process for various event types
5. **Admin Dashboard** - Secure dashboard for managing bookings, messages, content, and analytics

### Backend Features
- Booking management with availability checking
- Contact message storage
- Analytics tracking
- Content management
- Secure authentication

## 🚀 Tech Stack

### Frontend
- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - Premium animation library
- **React Hook Form + Zod** - Form handling and validation

### Backend & Database
- **Next.js API Routes** - Serverless backend
- **Prisma ORM** - Database management
- **PostgreSQL** - Relational database
- **NextAuth** - Authentication

### Additional Tools
- **Cloudinary** - Image management
- **Google Analytics** - Traffic tracking
- **Chart.js** - Analytics visualization
- **Lenis** - Smooth scrolling

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Cloudinary account (optional, for image uploads)

### Setup

1. **Clone and navigate to project**
```bash
cd shadrack-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Session secret (min 32 characters)
- `NEXTAUTH_URL` - Your app URL (http://localhost:3000 for development)
- Cloudinary credentials (optional)
- Email/SMTP settings
- Google Analytics ID

4. **Setup database**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
shadrack-portfolio/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── contact/      # Contact form endpoint
│   │   │   ├── bookings/     # Booking management
│   │   │   └── admin/        # Admin operations
│   │   ├── about/            # About page
│   │   ├── booking/          # Booking page
│   │   ├── contact/          # Contact page
│   │   ├── admin/            # Admin dashboard
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navigation.tsx     # Header/Nav
│       ├── Footer.tsx         # Footer
│       └── sections/          # Page sections
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                    # Static assets
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
└── next.config.js            # Next.js config
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gold (#D4AF37)
- **Text**: Dark Gray (#1a1a1a)
- **Background**: Light Gray (#FAFAFA)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

## 📊 Database Schema

### Key Models
- **User** - Authentication and admin users
- **Booking** - Event booking requests
- **Message** - Contact form messages
- **Testimonial** - Client testimonials
- **Event** - Speaking engagements and events
- **AnalyticsEvent** - Visitor tracking
- **Statistic** - Key metrics
- **SiteContent** - CMS data

## 🔐 Security Features

- **Authentication** via NextAuth
- **Password hashing** for admin access
- **CSRF protection** on forms
- **Environment variables** for sensitive data
- **Input validation** with Zod
- **Rate limiting** on API endpoints
- **SQL injection prevention** with Prisma ORM

## 📈 Analytics

- Track page views, bookings, and contacts
- View visitor trends and demographics
- Device breakdown analysis
- Traffic source attribution
- Peak traffic time analysis

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Build project: `npm run build`
2. Start server: `npm start`
3. Use PM2 or similar for process management

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS optimization
- Font loading optimization
- API route caching strategies

## 🔧 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
npx prisma studio   # Open Prisma Studio (database GUI)
```

## 🎬 Animations

### Key Animation Libraries
- **Framer Motion**: Component-level animations, scroll triggers
- **GSAP**: Complex sequences, timeline animations
- **CSS Animations**: Smooth scroll, transitions

## 📝 Content Management

Edit these sections in the admin dashboard:
- Biography
- Testimonials
- Speaking events
- Statistics
- Social links

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For issues or inquiries, contact through the website contact form or admin panel.

---

**Built with ❤️ for Shadrack G Mahinda**
