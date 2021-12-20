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
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
