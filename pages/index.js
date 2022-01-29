import Head from "next/head";
import Navbar from "../components/Nav/Nabvar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carolina Cobo Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
