import type {Metadata} from "next";
import {IBM_Plex_Sans} from "next/font/google";
import {cn} from "@/lib/utils";
import {
    ClerkProvider,
    OrganizationSwitcher,
    SignedIn,
    UserButton,
} from "@clerk/nextjs";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// import { Docs, Github, Times } from "./icons";
// import { Twitter } from "./icons";
// import { Discord } from "./icons";

const IBMPlex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
    title: "Imaginify",
    description: "AI-powered image generator",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ClerkProvider appearance={{
            variables: {colorPrimary: '#624cf5'}
        }}>

            <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
            {children}
            </body>
        </ClerkProvider>

        </html>
    );
}
