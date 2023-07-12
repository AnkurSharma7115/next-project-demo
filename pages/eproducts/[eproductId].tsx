import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

function EProductDetails({ eproduct }) {
 const router = useRouter();
 if (router.isFallback) {
  return <h1>Loading................</h1>;
 }
 return (
  <div>
   <div className="mt-10 text-center font-bold text-xl">eproduct DETAILS</div>
   <div className="mt-10">
    <div className="text-center w-3/4 space-y-8">
     <div className="">{eproduct.id}</div>
     <div className="">{eproduct.title}</div>
     <div className="">{eproduct.price}</div>
     <div className="">{eproduct.description}</div>
    </div>
   </div>
  </div>
 );
}

export default EProductDetails;

export async function getStaticPaths() {
 return {
  paths: [{ params: { eproductId: '1' } }],
  fallback: true,
 };
}
export async function getStaticProps(context) {
 const { params } = context;
 const { data } = await axios.get(`http://localhost:4000/eproductsList/${params.eproductId}`);
 //  if (!data.id) {
 //   notFound: true;
 //  }
 return {
  props: {
   eproduct: data,
  },
 };
}
