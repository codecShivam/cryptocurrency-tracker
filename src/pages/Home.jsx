import React from 'react'
import {Outlet} from "react-router-dom";

 const Home = () => {
  return (
    <div className=' text-black'>Home

        <Outlet />
    </div>
  )
}

export default Home;