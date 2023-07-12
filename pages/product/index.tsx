import Link from 'next/link';
import React from 'react';

function ProductList({ productId = 100 }) {
 return (
  <>
   <Link href="/">
    <a className="font-bold text-blue-600">Go back to Home</a>
   </Link>
   <div>
    <Link href="/product/1">
     <a className="font-semibold text-orange-600">Product 1</a>
    </Link>
   </div>
   <div>
    <Link href="/product/2">
     <a className="font-semibold text-orange-600">Product 2</a>
    </Link>
   </div>
   <div>
    {/* "replace prop will erase current history and will go back to base route of application" */}
    <Link href="/product/3" replace>
     <a className="font-semibold text-orange-600">Product 3</a>
    </Link>
   </div>
   <div>
    <Link href={`/product/${productId}`}>
     <a className="font-semibold text-orange-600">Product {productId}</a>
    </Link>
   </div>
  </>
 );
}

export default ProductList;
