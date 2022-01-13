import Head from "next/head";

export default function Blog({ title, desc }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <h1>Blog</h1>
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Blog",
      desc: "blog desc",
    },
  };
}
