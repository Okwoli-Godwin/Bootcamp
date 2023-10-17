import React from 'react'
import styled from "styled-components"
import img from "../Assets/farmers.jpg"
import { NavLink } from 'react-router-dom'
import {useMutation} from "@tanstack/react-query"
import { CreateUser } from '../Api/Api'
import {useQueryClient} from "@tanstack/react-query"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppDispach } from "../Global/Store";
import { registerUser } from "../Global/ReduxState"
import Swal from 'sweetalert2'
import { BiCard } from 'react-icons/bi'

const Signin = () => {

  const dispatch = UseAppDispach()
  const schema = yup.object({
			name: yup.string().required("field must be required"),
			email: yup.string().email().required(),
			password: yup.string().min(9).required(),
      location:yup.string().required(),
      BVN:yup.string().required()
		})
		.required();

	type formData = yup.InferType<typeof schema>;

	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
	} = useForm<formData>({
		resolver: yupResolver(schema),
	});

  const post = useMutation({
		mutationKey: ["User"],
		mutationFn: CreateUser,
		onSuccess: (data:any) => {
      console.log(data)
			dispatch(registerUser(data.data));

		},
	});

	const Submit = handleSubmit((data) => {
		post.mutate(data);
    // Swal.fire({
    //   title:"success",
    //   text: 'Successfully Logged in',
    //   timer: 2000
    // })
		reset();
	});
 console.log(Submit)

  return (
    <Container>
      {/* <BiCard> */}
        <Right>
          <Img src={img} />
        </Right>
        <Left  onSubmit={Submit}>
          <Top><h2>AGro-Allied</h2></Top>
          <Input {...register("name")} type="text" placeholder='Enter your name' />
          {/* <p>{errors?.name && errors?.name?.message}</p> */}
          <Input {...register("email")} type="email" placeholder='Enter your Email'/>
          {/* <p>{errors?.email && errors?.email?.message}</p> */}
          <Input {...register("location")} type="string" placeholder='Enter your Location' />
          {/* <p>{errors?.location && errors?.location?.message}</p> */}
          <Input {...register("password")} type="string" placeholder='Enter your password' />
          {/* <p>{errors?.password && errors?.password?.message}</p> */}
          <Input {...register("BVN")} type="number" placeholder='Enter your Bvn Number' />
          {/* <p>{errors?.BVN && errors?.BVN?.message}</p> */}
    
            <Button type="submit">Sign up</Button>
          
        </Left>
      {/* </Card> */}
    </Container>
  )
}

export default Signin
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Button = styled.button`
  width: 160px;
  height: 45px;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  align-items: center;
  color: #fff;
  background-color: #03993f;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  border-radius: 50px;
  margin-top: 20px;
  :hover{
    background-color: #fff;
    color: #03993f;
    border: 1px solid #03993f;
  }
`
const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 15px;
  border: 1px solid #f1f1f1;
  outline: none;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 15px;
`
const Top = styled.div`
  h2{
    color: #03993f;
  }
`
const Left = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
		p {
		font-size: 11px;
		margin-bottom: 5px;
		padding: 0;
		color: red;
		/* min-height: 10px; */
	}
	
`
const Right = styled.div`
  width: 50%;
  display: flex;
`
const Card = styled.form`
  width: 800px;
  height: 530px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
