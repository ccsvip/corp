import "./globals.css";
import { Aboreto } from 'next/font/google'
import Header from "./components/header";

const inter = Aboreto({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
