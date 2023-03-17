import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About"
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";
import Dashboard from "./Dashboard/Dashboard";
<<<<<<< HEAD
import Admin from "./Dashboard/AdminDash/Admin";

=======
import Signin from "./Signin/Signin";
import Contact from "./Contact/Contact"
import Blog from "./Blog/Blog"
import Product from "./Dashboard/Product";
>>>>>>> 92d43597222cefe7aaf45515a50776fd46dfad48

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
      path:"/adminDashboard",
  element:<Admin/>
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
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "/dashproduct",
      element: <Product />
    }
  ]);
  return element;
};

export default Allroutes;
