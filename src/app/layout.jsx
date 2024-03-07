import { Inter, Poppins } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import Styles from '@/app/style.module.css'
import AnimationProvider from "./components/AnimationProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets:['latin'],weight:"300"});

export const metadata = {
  title: "Daniel Mandevu",
  description: "Daniel`s portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-sm sm:text-xl`}>
        <AnimationProvider >
          {children}
        </AnimationProvider>
        </body>
    </html>
  );
}
