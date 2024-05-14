import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import '@/app/globals.css'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mar-Shell',
  description: 'A terminal-styled (Shell) portfolio built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`dark text-foreground dark:text-primary font-semibold anim ${sourceCodePro.className}`}
      >
        {children}
      </body>
    </html>
  )
}
