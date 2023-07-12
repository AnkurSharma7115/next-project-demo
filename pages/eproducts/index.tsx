import axios from 'axios';
import Link from 'next/link';

function EProductList({ eproductList }) {
 return (
  <>
   <div className="mt-10 text-center font-bold text-xl">List of E-Products</div>
   <div className="mt-10">
    <div className="flex w-3/4 mb-5 font-bold text-xl space-x-8">
     <div className="flex-1 ml-5">E-Product ID</div>
     <div className="flex-1">Title</div>
     <div className="flex-1">Action</div>
    </div>
    {eproductList.map((eproduct) => (
     <div key={eproduct.id} className="flex space-y-2 w-3/4 h-12 space-x-8">
      <p className="ml-5 flex-1">{eproduct.id}</p>
      <p className="flex-1">{eproduct.title}</p>
      <p className="flex-1">{eproduct.price}</p>
      <div className="flex-1">
       <Link href={`eproducts/${eproduct.id}`} passHref>
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

export default EProductList;

export async function getStaticProps() {
 const { data } = await axios.get('http://localhost:4000/eproductsList');
 return {
  props: {
   eproductList: data || [],
  },
  revalidate: 10,
 };
}
