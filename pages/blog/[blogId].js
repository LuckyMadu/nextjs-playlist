import Head from "next/head";

export default function Blog({ title, desc }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <h1>Blog</h1>
        <h2>ID: {process.env.NEXT_PUBLIC_ID}</h2>
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  console.log("user", user);
  return {
    props: {
      title: "Blog",
      desc: "blog desc",
    },
  };
}
