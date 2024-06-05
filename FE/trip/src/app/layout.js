'use client'

import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import { IsLoginProvider } from "@/components/user/IsLoginContext";
import { useEffect } from "react";
import { initKakao } from "kakao-js-sdk";
import store from '../store/store';
import { Provider } from "react-redux";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  initKakao(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);

  return (
    <html lang="en">
      <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=28c2db66d07b61a974588b522820c7ac" async></script>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <IsLoginProvider>
            <Navbar/>
            {children}
          </IsLoginProvider>
        </Provider>
      </body>
    </html>
  );
}