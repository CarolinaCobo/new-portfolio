import Head from "next/head";
import Navbar from "../components/Nav/Nabvar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}
