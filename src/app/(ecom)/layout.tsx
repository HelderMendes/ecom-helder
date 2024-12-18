import type { Metadata } from "next";
import localFont from "next/font/local";
// import '@/app/globals.css';
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";
import Loading from "./loading";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import DisableDraftMode from "@/components/DisableDraftMode";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Helder Shop",
  description: "E-commerce for cloths",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
          <main>
            <Suspense fallback={<Loading />}>
              <Header />
              {children}
            </Suspense>
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
