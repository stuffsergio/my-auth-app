import { SessionProvider } from "next-auth/react";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Auth App",
  description: "NextAuth + Prisma + Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
