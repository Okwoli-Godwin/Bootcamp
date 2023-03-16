import React, {useState} from 'react'
import styled from 'styled-components'
import {TfiReload} from "react-icons/tfi"
// import img1 from "../Assets/diamond.png"
// import img2 from "../Assets/power.png"
// import img3 from "../Assets/money.png"
import {AiOutlineClose} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Cards = () => {
    const [show, setShow] = useState(false)
    const [cancle, setCancle] = useState(false)

    const Canc = () => {
        setShow(false)
    }

    const Toggle =() => {
        setShow(!false)
    }
  return (
    <Container>
        <Boxhold>
            <Card>
                  <Sales><T>Total Sells</T></Sales>
                  <Doll>
                      <h2>$3799.00</h2>
                      <p>34.7%</p>
                      <Com>Compared to April 2021</Com>
                  </Doll>
            </Card>
            <Card2>
                <Sales><T>Total Sells</T></Sales>
                  <Doll>
                      <h2>$3799.00</h2>
                      <p>34.7%</p>
                      <Com>Compared to April 2021</Com>
                  </Doll>
            </Card2>
            <Card3>
               <Sales><T>Total Sells</T></Sales>
                  <Doll>
                      <h2>$3799.00</h2>
                      <p>34.7%</p>
                      <Com>Compared to April 2021</Com>
                  </Doll>
            </Card3>
        </Boxhold>

    </Container>
  )
}

export default Cards
const Com = styled.div`
    color: #828f99;
    margin-top: 10px;
`
const Doll = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    h2{
        margin: 0;
    }
    p{
        color: #47ad24;
        margin: 0;
    }
`
const T = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    color: #828f99;
    font-weight: 400;
`
const Sales = styled.div`
    width: 100%;
`
const Proceed = styled.button`
    font-size: 17px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    font-family: U8,sans-serif;
    margin-top: 160px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #0d60d8;
    border: none;
    outline: none;
    width: 90%;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
`
const Left = styled.div`
    color: rgb(26, 32, 44);
`
const Input2 = styled.input`
    width: 88%;
    height: 45px;
    color: #1b2331;
    background-color: #edf2f7;
    font-size: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
`
const Input = styled.input`
    width: 88%;
    height: 45px;
    color: #1d222b;
    background-color: #edf2f7;
    font-size: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
`
const Tap2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    /* margin-bottom: 5px; */
    p{
        color: #4a5568;
        font-weight: 700;
        font-family: U8,sans-serif;
        font-size: 13px;
    }
`
const Tap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    /* margin-bottom: 5px; */
    p{
        color: #4a5568;
        font-weight: 700;
        font-family: U8,sans-serif;
        font-size: 13px;
    }
`
const Quick = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    p{
        color: #718096;
        margin: 0;
        font-size: 14px;
    }
    h3{
        font-size: 24px;
        margin: 0;
        color: #083e9e;
        font-weight: 700;
        font-family: U8,sans-serif;
    }
`
const Icons = styled.div`
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
`
const Holder = styled.div`
    width: 27%;
    display: flex;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    padding-left: 35px;
`
const Save = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    transition-timing-function: ease-in;
    transition: 1s;
    /* transform: translateX(-100%); */
    /* transition-delay: 1s; */
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        font-size: .875rem;
        opacity: .75;
        font-weight: 700;
        font-family: U8,sans-serif;
        color: #5A5A5A !important;
        margin: 0;
    }
    h2{
        font-size: 26px;
        margin: 0;
    }
`
const Image = styled.img`
    margin-left: 15px;
`
const Card3 = styled.div`
    width: 320px;
    height: 180px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Card2 = styled.div`
    width: 320px;
    height: 180px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Card = styled.div`
    width: 320px;
    height: 180px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.div`
    font-size: 15px;
    color: #fff;
    text-align: center;
    width: 180px;
    cursor: pointer;
    height: 45px;
    display: flex;
    font-weight: 700;
    font-family: U8,sans-serif;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #0d60d8;
    transition: ease-in 350ms;
`
const Icon = styled.div`
    font-weight: bold;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    /* position: fixed; */
`