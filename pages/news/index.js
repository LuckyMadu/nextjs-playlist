function NewsList({ articles }) {
  return (
    <>
      <h1>List of news</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log("pre-rendering news list");

  return {
    props: {
      articles: data,
    },
  };
}
