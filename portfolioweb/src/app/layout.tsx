// src/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'My portfoilio',
  description: 'A fully responsive blogging website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fade-in bg-[#F5F5DC]   min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#2E8B57] flex items-center justify-between p-4 text-black fixed top-0 w-full z-10">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">UBAID&apos;S Portfolio Website</h1>
            <Link href="#home" className='px-10'>HOME</Link>
            <Link href="#home" className='px-10'>ABOUT</Link>
            <Link href="#home" className='px-10'>CONTACT</Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-[#2E8B57] p-4 text-black">
          <p className="text-center ">&copy; 2024 My Blog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}