import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.sass";
import AppHeader from "@/app/components/app-header/app-header";
import AppFooter from "@/app/components/app-footer/app-footer";

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
    title: "Oscar Tacha",
    description: "Systems Engineer",
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body className={inter.className}>
        <AppHeader/>
        <div className="children--container">
            {children}
        </div>
        <AppFooter/>
        </body>
        </html>
    );
}
