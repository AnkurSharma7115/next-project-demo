import React from 'react';
import axios from 'axios';

function NewsArticlesList({ articlesList }) {
 return (
  <div>
   <h1 className="text-2xl font-extrabold">List of News Articles</h1>
   {articlesList.map((article) => {
    return (
     <div className="mt-4 font-xl font-semibold" key={article.id}>
      <h2>
       {article.id} {article.title} | {article.category}
      </h2>
     </div>
    );
   })}
  </div>
 );
}

export default NewsArticlesList;

export async function getServerSideProps() {
 const { data } = await axios.get('http://localhost:4000/newsList');

 return {
  props: {
   articlesList: data || [],
  },
 };
}
