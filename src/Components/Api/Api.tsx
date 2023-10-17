import axios from "axios"

export interface postData {
    name: string;
    email: string;
    password: string;
    BVN:string;
      location:string;
  }

export const CreateUser = async({
    name,
    email,
    password,
    BVN,
      location,
  }:postData)=>{
await axios.post("http://localhost:3030/api/registerFarmer",{
    name,
    email,
    password,
    BVN,
      location,
}).then(res => res.data)
}