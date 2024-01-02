import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const HomePage = () => {

    // const fetchUsers = async ()=>{
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //     return res.json();
    // }
    const fetchUsers = () =>
      axios.get("https://jsonplaceholder.typicode.com/users");

    const {data,isLoading} = useQuery({queryKey:["users"],queryFn:fetchUsers})
   if(isLoading) return <h1>Loading...</h1>
//   return (
//     <div>{data.map(item=><h3 key={item.id}>{item.name}</h3>)}</div>
//   )
return(<div>{data.data.map(item=><h3 key={item.id}>{item.name}</h3>)}</div>)
}

export default HomePage