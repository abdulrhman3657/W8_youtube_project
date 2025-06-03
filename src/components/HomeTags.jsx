import React from "react";

function HomeTags() {
  return (
    <div>
      <div>
        <ul className="flex flex-wrap gap-3 pt-18">
          <li className="font-bold w-13 py-1 text-center flex-wrap bg-white text-black rounded-xl">
            All
          </li>
          <li
            className="font-bold w-20 py-1 text-center  rounded-xl"
            style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
          >
            Watched
          </li>
          <li
            className="font-bold w-30 py-1 text-center  rounded-xl"
            style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
          >
            New to you
          </li>
          <li
            className="font-bold w-15 py-1 text-center  rounded-xl"
            style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
          >
            Live
          </li>
                    <li
            className="font-bold w-15 py-1 text-center  rounded-xl"
            style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
          >
            Mixes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeTags;
