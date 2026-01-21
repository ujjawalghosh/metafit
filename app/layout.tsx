"use client";

import React from 'react'; // Import React for ReactNode type
import ModalManager from "@/components/common/modals/ModalManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StoreProvider } from './store-provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "510967021787-g3s47pav3dtq02u2sn0ckh7qs2v10ffe.apps.googleusercontent.com"}>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" />
          <script
            src="https://accounts.google.com/gsi/client"
            async
            defer
          ></script>
        </head>
        <body className={inter.className}>
          <StoreProvider>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
            />
            {children}
            <ModalManager />
          </StoreProvider>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
