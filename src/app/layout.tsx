
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import {customFont1,customFont2,customFont3} from "./font/fonts"
import ReduxProvider from './redux/ReduxProvider'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${customFont1.variable} ${customFont2.variable} ${customFont3.variable}`}>
      <body
      >
        <ReduxProvider>
          <Navbar/>
          <div className="mt-16"> {children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
