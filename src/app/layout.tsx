import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Shadrack G Mahinda | Executive Brand | Speaker | Leader',
  description: 'Transformational leader, speaker, pastor, and marketplace innovator. Book Shadrack for speaking engagements, mentorship, and corporate events.',
  keywords: 'Shadrack, leadership, speaker, pastor, mentor, marketplace, Kenya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shadrackofficial.com',
    siteName: 'Shadrack G Mahinda',
    images: [
      {
        url: 'https://res.cloudinary.com/shadrack/image/upload/v1/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shadrack G Mahinda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadrack G Mahinda',
    description: 'Transformational leader and executive brand',
    creator: '@shadrack',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
