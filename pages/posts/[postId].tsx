import axios from 'axios';
// import { useRouter } from 'next/router';
import React from 'react';

function PostDetails({ post }) {
 //  const router = useRouter();
 //  if (router.isFallback) {
 //   return <h1>Loading................</h1>;
 //  }
 return (
  <div>
   <div className="mt-10 text-center font-bold text-xl">POST DETAILS</div>
   <div className="mt-10">
    <div className="text-center w-3/4 space-y-8">
     <div className="">{post.id}</div>
     <div className="">{post.title}</div>
     <div className="">{post.body}</div>
    </div>
   </div>
  </div>
 );
}

export default PostDetails;
// to tell NextJS about the path that we are sending at the time of build time
export async function getStaticPaths() {
 // for getting all the paths/id from the api data list we can also use total counts and data array to
 // create the params object
 //  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
 //  const paths = data.map((post) => {
 //   return {
 //    params: {
 //     postId: `${post.id}`,
 //    },
 //   };
 //  });
 return {
  paths: [
   {
    params: { postId: '1' },
   },
   {
    params: { postId: '2' },
   },
   {
    params: { postId: '3' },
   },
  ],
  //   paths: paths,
  fallback: 'blocking',
 };
}

export async function getStaticProps(context) {
 const { params } = context;
 const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
 //if our list does not have any data corresponding to the ID - render 404 page
 console.log('generating page for ', params.postId);
 if (!Boolean(data.id)) {
  return {
   notFound: true,
  };
 }
 console.log(`generating fallback for post ID - ${params.postId}`);

 return {
  props: {
   post: data,
  },
 };
}
