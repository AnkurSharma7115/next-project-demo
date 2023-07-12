import { useRouter } from 'next/router';
import React from 'react';

function Review() {
 const router = useRouter();
 const { productId, reviewId } = router.query;
 return (
  <div>
   Reveiw {reviewId} for Product {productId}
  </div>
 );
}

export default Review;
