// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Emmanuel Maduabuchi — Senior Backend AI Engineer",
    description:
        "Senior Backend AI Engineer. React, Node.js/TypeScript, NestJS-style architecture, Python.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="antialiased font-sans bg-zinc-950 text-zinc-100">
        {children}
        </body>
        </html>
    );
}
