import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react';

function Home() {
 //  const router = useRouter();

 //  const handleClick = () => {
 //   router.push('/product');
 //  };
 return (
  <>
   <h1>This is Home Page</h1>
   <Link href="/about">
    <a className="mr-4 font-bold text-blue-600">About</a>
   </Link>
   <Link href="/profile">
    <a className="mr-4 font-bold text-blue-600">Profile</a>
   </Link>
   <Link href="/product">
    <a className="mr-4 font-bold text-blue-600">Product</a>
   </Link>
   <Link href="/users">
    <a className="mr-4 font-bold text-blue-600">Users</a>
   </Link>
   <Link href="/posts">
    <a className="mr-4 font-bold text-blue-600">Posts</a>
   </Link>
   <Link href="/eproducts">
    <a className="mr-4 font-bold text-blue-600">E-products</a>
   </Link>
   {/* <button
    onClick={handleClick}
    className="block mt-4 border border-teal-700 bg-teal-600 text-white px-2 py-1 font-base"
   >
    Place Order
   </button> */}
  </>
 );
}

export default Home;
