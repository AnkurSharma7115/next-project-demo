import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function EventsList({ eventList }) {
 const [events, setEvents] = useState(eventList);
 const router = useRouter();
 const fetchEvents = async (filterName) => {
  const { data } = await axios.get(`http://localhost:4000/events?category=${filterName}`);
  setEvents(data);
  router.push(`/events?category=${filterName}`, undefined, { shallow: true });
 };
 return (
  <div>
   <button
    onClick={() => fetchEvents('Sports')}
    className="border border-teal-700 bg-teal-600 text-white px-1 py-0.5 text-sm"
   >
    Sports Filter
   </button>
   <button
    onClick={() => fetchEvents('Technology')}
    className="border border-teal-700 bg-teal-600 text-white px-1 py-0.5 text-sm"
   >
    Technology Filter
   </button>
   <h1 className="text-2xl font-extrabold">List of Events</h1>
   {events.map((event) => {
    return (
     <div className="mt-4 font-xl font-semibold" key={event.id}>
      <h2>
       {event.id} {event.title} {event.date} | {event.category}
      </h2>
      <p className="text-lg mt-2 font-normal">{event.description}</p>
      <hr />
     </div>
    );
   })}
  </div>
 );
}

export default EventsList;

export async function getServerSideProps(context) {
 // to update url in browser according to filters and query parameter
 // while handling Pre-rendering with client side data fetching
 const { query } = context;
 const { category } = query;
 const queryString = category ? `category=${category}` : '';
 const { data } = await axios.get(`http://localhost:4000/events?${queryString}`);

 return {
  props: {
   eventList: data || [],
  },
 };
}
