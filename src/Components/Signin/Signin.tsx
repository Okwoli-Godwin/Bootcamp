import React from 'react'
import styled from "styled-components"
import img from "../Assets/farmers.jpg"
import { NavLink } from 'react-router-dom'

const Signin = () => {
  return (
    <Container>
      <Card>
        <Right>

          <NavLink to="/Dashboard" style={{textDecoration: "none"}}>
            <Button>Sign up</Button>
          </NavLink>
          <Img src={img} />
        </Right>
        <Left>
          <Top><h2>AGro-Allied</h2></Top>
          <Input type="text" placeholder='Enter your name' />
          <Input type="email" placeholder='Enter your Email'/>
          <Input type="number" placeholder='Enter your Phone Number' />
          <Input type="number" placeholder='Enter your Bvn Number' />
          <Button>Sign up</Button>
        </Left>
      </Card>
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
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Right = styled.div`
  width: 50%;
  display: flex;
`
const Card = styled.div`
  width: 800px;
  height: 500px;
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
