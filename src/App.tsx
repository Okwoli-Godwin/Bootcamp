import React from 'react'
import ContactUs from './Components/ContactUs/ContactUs'
// import Allroutes from './Components/Allroutes'
import Products from './Components/Products/Product'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'

const App = () => {
  return (
    <div>
      {/* <Allroutes /> */}
      <Products />
      <br /><br />
      <Signup />
      <br /> <br />
      <ContactUs />
      <br /> <br /> <br />
      <Signin />
    </div>
  )
}

export default App