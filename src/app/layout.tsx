import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providerComponents/theme-provider";

export const metadata: Metadata = {
  title: "Subhraneel Goswami",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
