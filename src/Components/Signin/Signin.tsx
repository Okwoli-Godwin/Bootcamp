import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import pix from "../Assets/agric-removebg-preview.png";

import pix from "../Assets/agric-removebg-preview.png";
import image from "../Assets/handrm.png";

const Signin = () => {

  return (
    <Container>
      <Card>
        <Left>
          <First>
            <div>
              <img src={pix} alt="" />
            </div>

            <h3>
              We are here <br />
              to help farmers
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              iure sint, excepturi earum corporis ut quaerat.
            </p>
            <p style={{ marginTop: "20px", fontSize: "13px" }}>
              Already have an account?
              <span style={{ fontSize: "14px" }}>Sign in</span>
            </p>
          </First>

          <img
            src={image}
            style={{
              position: "absolute",
              height: "360px",
              bottom: "25%",
              right: "1px",
            }}
          />
        </Left>

        <Right>
          <Top>
            <img src={pix} alt="" />
          </Top>
          <h4>Signup</h4>
          <p>Enter your information</p>

          <Holdinp>
            <Logo></Logo>
            <input placeholder="Enter name" />
          </Holdinp>

          <Holdinp style={{ marginTop: "10px" }}>
            <Logo></Logo>
            <input placeholder="Enter email" />
          </Holdinp>

          <Holdinp style={{ marginTop: "10px" }}>
            <Logo></Logo>
            <input placeholder="Enter password" />
          </Holdinp>

          <NavLink to="/Dashboard" style={{textDecoration: "none"}}>
            <Button>Sign up</Button>
          </NavLink>
        </Right>
      </Card>
    </Container>
  );
};

export default Signin;

const Sec = styled.div`
  width: 200px;
  /* background-color: blue; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const First = styled.div`
  /* background-color: red; */
  /* width: 240px; */
`;

const Button = styled.button`
  width: 75%;
  height: 30px;
  background-color: #039566;
  border: 0;
  border-radius: 20px;
  color: white;
  margin-left: 40px;
  margin-top: 20px;

  :hover {
    transform: scale(0.99);
    cursor: pointer;
  }
`;

const Holdinp = styled.div`
  margin-left: 40px;
  width: 75%;
  height: 30px;
  border: 1px solid #d5d5b3;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    outline: 0;
    border: 0;
    padding-left: 10px;
    ::placeholder {
      font-size: 11px;
    }
  }
`;
const Logo = styled.div``;

const Top = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;

  img {
    height: 50px;
  }
`;

const Left = styled.div`
  width: 400px;
  height: 100%;
  background-image: linear-gradient(to right, #f7f9f6, #e5ecdc);
  display: flex;
  position: relative;

  span {
    color: #039566;
  }

  img {
    height: 55px;
    margin-left: 20px;
    margin-top: 50px;
  }
  h3 {
    color: #827b40;
    margin: 0;
    margin-top: 30px;
    margin-left: 20px;
    font-size: 22px;
  }
  p {
    margin: 0;
    margin-top: 13px;
    width: 60%;
    font-size: 11px;
    margin-left: 22px;
  }
`;
const Right = styled.form`
  width: 300px;
  height: 380px;
  /* background-color: red; */

  h4 {
    margin: 0;
    margin-left: 40px;
    margin-top: 30px;
  }

  p {
    margin: 0;
    margin-left: 40px;
    color: darkgray;
    margin-top: 3px;
    font-size: 12px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
const Card = styled.div`
  width: 850px;
  height: 480px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  background-color: white;
`;