import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Projects and articles worked on as software engineer and career switcher.`}
        key="description"
      />
      <meta
        name="og:description"
        content={`Projects and articles worked on as software engineer and career switcher.`}
        key="og:description"
      />
      <meta
        name="og:title"
        content={`Carolina Cobo - Portfolio`}
        key="og:title"
      />
      <meta
        property="og:image"
        content="public/og/heroimage.png"
        key="og:image"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.carolinacobo.com/" />
    </Head>
  );
}
