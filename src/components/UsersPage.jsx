import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UsersPage = () => {
  // const fetchUsers = async ()=>{
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     return res.json();
  // }
  const fetchUsers = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    gcTime:5000
    
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h3>Something went wrong - {error.message}</h3>;
  //   return (
  //     <div>{data.map(item=><h3 key={item.id}>{item.name}</h3>)}</div>
  //   )
  return (
    <div>
      {data.data.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </div>
  );
};

export default UsersPage;