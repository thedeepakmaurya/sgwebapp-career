import Header from "@/components/header";
import "./globals.css";
import { Nunito } from 'next/font/google';
import Footer from "@/components/footer";
import 'boxicons/css/boxicons.min.css';

const nunito = Nunito({
  weight: [ "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Career | SG Web App Techniques",
  description: "Website Development Company in Delhi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
