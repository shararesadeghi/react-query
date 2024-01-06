import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useUserDetails } from '../hooks/queries';

const UserDetails = () => {

    const {id} = useParams();
    
    const {data} = useUserDetails(id);
    console.log(data)

  return (
    <div>{data?.data.name}</div>
  )
}

export default UserDetails