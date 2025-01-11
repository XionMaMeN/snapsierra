import React from "react";

export default function Footer() {
  return (
    <div className="container bg-[#1C1C1C] max-h-max flex flex-col py-10">
      <div className="flex justify-between px-[90px]">
        <p className="text-[1.8rem] text-font">
          Find your home of <br />
          inspiration with <span className="text-[#505050]">Snap Sierra.</span>
        </p>
        <ul>
          <label className="text-[#505050]">USEFUL</label>
          <li className="text-nav-menu">Explore</li>
          <li className="text-nav-menu">Buy Photo</li>
        </ul>
      </div>

      <p className="text-center text-[9rem] text-[#797979] font-semibold tracking-wider">
        SNAPSIERRA
      </p>
    </div>
  );
}
