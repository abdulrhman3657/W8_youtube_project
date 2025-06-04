import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { Link } from "react-router";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const [text, setText] = useState("");

  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";

  const search = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${text}&type=video&key=${KEY}`
      )
      .then((res) => {
        // console.log(res.data)
        console.log(res.data.items[1].snippet.title);
      });
  };

  return (
    <div>
      <nav className="bg-[#0f0f0f]/96 text-white p-3 fixed z-10 w-full">
        <ul className=" hidden lg:flex items-center justify-between gap-3">
          <li className="flex gap-4 items-center">
            <RxHamburgerMenu className="text-white text-3xl lg:ml-7" />
            <Link to={"/"}>
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt=""
              />
            </Link>
          </li>
          <li className="flex items-center gap-3 justify-center w-full">
            <div className="flex relative">
              <input
                style={{ border: "solid 2px hsla(0, 0%, 100%, .08)" }}
                className=" rounded-2xl px-2 py-1 lg:w-100 xl:w-150 placeholder:px-2"
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <CiSearch
                style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
                className="text-white text-4xl p-1.5 w-15 rounded-r-full h-full hover:cursor-pointer absolute right-0"
                onClick={search}
              />
            </div>
            <FaMicrophone
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="text-4xl p-2.5 rounded-full hover:cursor-pointer"
            />
          </li>
          <li>
            <Link to={"/signin"} className="flex items-center gap-2"><FaRegUserCircle className="text-white text-3xl" /> <span>SignIn</span></Link>
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
