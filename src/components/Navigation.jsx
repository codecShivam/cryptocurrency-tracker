import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-lg ">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `w-full  ${
            isActive
              ? "bg-cyan text-gray-300 "
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }  text-center font-nunito m-2.5 text-base  border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>{" "}
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full  ${
            isActive
              ? "bg-cyan text-gray-300 "
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }  text-center font-nunito m-2.5 text-base  border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>{" "}
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full  ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }   text-center font-nunito m-2.5 text-base  border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>
    </nav>
  );
};

export default Navigation;
