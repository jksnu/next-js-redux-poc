import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";

const inter = Inter({ subsets: ["latin"] });
import {store} from '../redux/store';
import { Provider } from 'react-redux';
import { ReduxProvider } from '@/redux/provider';

export const metadata: Metadata = {
  title: "Create Next App",
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
        <div>
          <TopNavbar />
          <ReduxProvider>            
            {children}
          </ReduxProvider>          
        </div>        
      </body>
    </html>
  );
}