import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>About Lahiru</title>
        <meta name="description" content="nextjs about" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
