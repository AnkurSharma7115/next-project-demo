import axios from 'axios';
import Link from 'next/link';

function PostList({ posts }) {
 return (
  <>
   <div className="mt-10 text-center font-bold text-xl">List of Posts</div>
   <div className="mt-10">
    <div className="flex w-3/4 mb-5 font-bold text-xl space-x-8">
     <div className="flex-1 ml-5">Post-ID</div>
     <div className="flex-1">Title</div>
     <div className="flex-1">Action</div>
    </div>
    {posts.map((post) => (
     <div key={post.id} className="flex space-y-2 w-3/4 h-12 space-x-8">
      <p className="ml-5 flex-1">{post.id}</p>
      <p className="flex-1">{post.title}</p>
      <div className="flex-1">
       <Link href={`posts/${post.id}`} passHref>
        <button className="border border-teal-700 bg-teal-600 text-white px-1 py-0.5 text-sm">
         VIEW
        </button>
       </Link>
      </div>
     </div>
    ))}
   </div>
  </>
 );
}

export default PostList;

export async function getStaticProps() {
 const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
 //  it always runs on server
 console.log(data);
 return {
  props: {
   // fallback:true will be run for the limited data we have fetch
   //    posts: data.slice(0, 3) || {},

   //fallback:true will not run if the view port has already that data fetched or through scroll
   posts: data.slice(0, 3) || {},
  },
 };
}
