import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App() {
  return (
    <main className="max-w-7xl m-auto px-4" style={manrope.style}>
      <Header />
      <Home />
      <About />
      <Blog />
      <Footer />
    </main>
  );
}
