import React from "react";

function CategoryArticle({ articles, category }) {
  return (
    <div>
      <h1>category: {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} -{article.title}
            </h2>
            <p>{article.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryArticle;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);

  res.setHeader("Set-Cookie", ["name=Lahiru"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  console.log("pre-rendering news list for sports", category);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
