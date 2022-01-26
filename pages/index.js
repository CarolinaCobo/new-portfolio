import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Nav/Nabvar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Projects2 from "../components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <Projects />

      <Head>
        <title>New Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
