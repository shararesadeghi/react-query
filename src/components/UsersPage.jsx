import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUserData } from "../hooks/queries";

const UsersPage = () => {
  // const fetchUsers = async ()=>{
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     return res.json();
  // }

  const { data, isLoading, isError, error, isFetching, refetch } = useUserData();
 // if (isLoading) return <h1>Loading...</h1>;
//if (isError) return <h3>Something went wrong - {error.message}</h3>;
  //   return (
  //     <div>{data.map(item=><h3 key={item.id}>{item.name}</h3>)}</div>
  //   )
  return (
    <div>
      <button onClick={refetch}>Fetch</button>
      {isLoading && isFetching && <h1>Loading...</h1>}
      {data?.data.map((item) => (
        <Link key={item.id} to={`/users/${item.id}`}>
          <h3>{item.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
