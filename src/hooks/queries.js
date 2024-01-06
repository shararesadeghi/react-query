import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserData = ()=>{
      const fetchUsers = () =>
        axios.get("https://jsonplaceholder.typicode.com/users");
        return useQuery({
          queryKey: ["users"],
          queryFn: fetchUsers,
          //gcTime:5000,
          //staleTime:120*1000,
          // refetchOnMount:false,
          //refetchOnWindowFocus:false,
          // refetchInterval:2 * 1000,
          enabled: false,
        });
}

const useUserDetails = (id)=>{
    const fetcUserDetails = ({ queryKey }) => {
      return axios.get(
        `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
      );
    };
    return useQuery({ queryKey: ["users", id], queryFn: fetcUserDetails });
}

export {useUserData,useUserDetails}