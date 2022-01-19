export default function News({ data }) {
  return <h1 className="content">{data}</h1>;
}

export async function getStaticProps(context) {
  console.log("getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview ? "List of draft news" : "List of published news",
    },
  };
}
