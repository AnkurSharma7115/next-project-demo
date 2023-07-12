import axios from 'axios';

function UserList({ users }) {
 return (
  <>
   <div className="mt-10 text-center font-bold text-xl">List of Users</div>
   <div className="mt-10">
    {users.map((user) => (
     <div key={user.id} className="flex w-1/2 space-y-2">
      <p className="flex-1">{user.name}</p>
      <p className="flex-1">{user.email}</p>
      <p className="flex-1">{user.phone}</p>
     </div>
    ))}
   </div>
  </>
 );
}

export default UserList;

export async function getStaticProps() {
 const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
 //  it always runs on server
 console.log(data);
 return {
  props: {
   users: data || {},
  },
 };
}
