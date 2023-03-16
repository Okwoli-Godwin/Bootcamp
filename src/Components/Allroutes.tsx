import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About"
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";
import Dashboard from "./Dashboard/Dashboard";
import Signin from "./Signin/Signin";
import Contact from "./Contact/Contact"

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/who we are",
      element: <About />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);
  return element;
};

export default Allroutes;
