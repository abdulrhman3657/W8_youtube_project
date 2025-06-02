import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <nav className="bg-[#0f0f0f] text-white p-3">
        <ul className=" hidden lg:flex items-center justify-between gap-3">
          <li className="flex gap-4">
            <RxHamburgerMenu className="text-white text-3xl" />
            <Link to={"/"}>
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt=""
              />
            </Link>
          </li>
          <li className="flex items-center gap-3 justify-center w-full">
            <input
              className="border-gray-400 border-1 rounded-2xl px-2 py-1 w-1/4"
              type="text"
              placeholder="Search"
            />
            <CiSearch
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="text-white text-4xl p-2 rounded-full hover:cursor-pointer"
            />
            <FaMicrophone
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="text-4xl p-3 rounded-full hover:cursor-pointer"
            />
          </li>
          <li>
            <CiBellOn className="text-3xl" />
          </li>
        </ul>
        <ul className="flex gap-3 lg:hidden">
                      <li className="flex gap-4">
              <RxHamburgerMenu className="text-white text-3xl" />
              <Link to={"/"}>
                <img
                  className="w-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                  alt=""
                />
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
