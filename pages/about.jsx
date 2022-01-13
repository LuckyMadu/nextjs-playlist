import Head from "next/head";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About Lahiru</title>
        <meta name="description" content="nextjs about" />
      </Head>
      <div className="content">About</div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
