import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Shreepad Avhad',
  description: 'Senior Product Designer & Frontend Architect',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary"
        )}
      >
        {children}
      </body>
    </html>
  )
}
