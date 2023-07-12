import { useRouter } from 'next/router';
import React from 'react';

function Docs() {
 const router = useRouter();

 //as Next.js by default pre-renders everytime
 // we will initialize with default value to params as it gives array
 //to ensure the code will not throw any error
 //  const { params } = router.query;
 const { params = [] } = router.query;
 console.log(params);
 if (params.length === 2) {
  return (
   <h1>
    Viewing docs for feature {params[0]} and concept {params[1]}
   </h1>
  );
 } else if (params.length === 1) {
  return <h1>Viewing docs for feature {params[0]}</h1>;
 }
 return <div>Documentation page</div>;
}

export default Docs;
