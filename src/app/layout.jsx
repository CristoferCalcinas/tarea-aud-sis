import BGLayout from "@/layout/BGLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio-Tarea",
  description: "Portafolio de tareas y avance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BGLayout>{children}</BGLayout>
      </body>
    </html>
  );
}
