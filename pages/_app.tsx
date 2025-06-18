import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={`${bebasNeue.className} ${poppins.variable} bg-black`}>
      <Navigation />
      <Component key={router.route} {...pageProps} />
      <Footer />
    </main>
  );
}
