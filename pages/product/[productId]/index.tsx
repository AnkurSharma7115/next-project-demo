import { useRouter } from 'next/router';
import React from 'react';

function ProductDetails() {
 const router = useRouter();
 const id = router.query.productId;
 return <div>Product Details of Product {id} Here</div>;
}

export default ProductDetails;
