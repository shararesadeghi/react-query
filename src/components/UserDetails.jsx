import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const {id} = useParams();
    const fetcUserDetails = ({queryKey})=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
    }
    const {data} = useQuery({queryKey:["users",id],queryFn:fetcUserDetails})
    console.log(data)

  return (
    <div>{data?.data.name}</div>
  )
}

export default UserDetails