import React from 'react';
import axios from 'axios';

function ArticlesByCategory({ articles, category }) {
 return (
  <div>
   <h1 className="text-2xl font-extrabold">Showing News for Category {category}</h1>
   {articles.map((article) => {
    return (
     <div className="mt-4 font-xl font-semibold" key={article.id}>
      <h2>
       {article.id} {article.title} | {article.description}
      </h2>
      <hr />
     </div>
    );
   })}
  </div>
 );
}

export default ArticlesByCategory;

export async function getServerSideProps(context) {
 const { params } = context;
 const { category } = params;
 const { data } = await axios.get(`http://localhost:4000/newsList?category=${category}`);

 return {
  props: {
   articles: data || [],
   category,
  },
 };
}
