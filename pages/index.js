import Head from "next/head";
import Navbar from "../components/Nav/Nabvar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carolina Cobo - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="og:title"
          property="og:title"
          content="Carolina Cobo - Career switcher projects and articles"
        />
        <meta
          key="og:image"
          property="og:image"
          content="/images/heroImage.svg"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Projects and articles I worked on as software engineer and career switcher."
        />
        <meta
          key="description"
          property="description"
          content="Projects and articles I worked on as software engineer and career switcher."
        />
        <meta property="og:url" content="https://www.carolinacobo.com/" />
      </Head>

      <Navbar />
      <HeroSection />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
