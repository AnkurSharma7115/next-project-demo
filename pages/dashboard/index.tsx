import axios from 'axios';
import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import useSWR from 'swr';

function DashboardSWR() {
 //  const [isLoading, setIsLoading] = useState(true);
 //  const [dashboardData, setDashboardData] = useState(null);

 //  useEffect(() => {
 //   async function fetchData() {
 //    const { data } = await axios.get('http://localhost:4000/dashboardData');
 //    setDashboardData(data);
 //    setIsLoading(false);
 //   }
 //   fetchData();
 //  }, []);

 const { data, error } = useSWR('dashboard', async () => {
  const { data } = await axios.get('http://localhost:4000/dashboardData');
  return data;
 });
 if (error) {
  return <h1>Error Occured...</h1>;
 }

 if (!data) {
  return <h1>Loading...</h1>;
 }

 return (
  <div>
   <h1>Dahsboard</h1>
   <h2>Posts - {data.posts}</h2>
   <h2>Posts - {data.likes}</h2>
   <h2>Posts - {data.comments}</h2>
   <h2>Posts - {data.dislikes}</h2>
  </div>
 );
}

export default DashboardSWR;
