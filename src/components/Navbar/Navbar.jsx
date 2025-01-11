import { useState } from "react";
import DropdownCategory from "./DropdownCategory";
import profile from "../../assets/img/23.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
        <nav className="flex items-center justify-between gap-9 px-[90px] py-6 ">
          <a
            class="logo"
            href="/"
            className="text-lg transition-all semibold text- text-font"
          >
            SNAPSIERRA.
          </a>

          <div
            id="search"
            className="relative items-center justify-center hidden w-full gap-2 px-3 py-2 rounded-xl md:flex bg-bg-input"
          >
            <i className="text-lg bx bx-search text-ph-input"></i>
            <input
              type="text"
              placeholder="Search what you want"
              className="w-full bg-transparent border-none caret-gray-600 text-font focus:outline-none placeholder-ph-input"
            />
          </div>

          <ul className="items-center hidden gap-8 font-medium cursor-pointer xl:flex">
            <li className="text-nav-menu hover:text-font text-nowrap">
              Explore
            </li>

            <li
              className="flex items-center justify-center text-nav-menu hover:text-font text-nowrap"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              Category
              <i class="bx bx-chevron-down text-2xl "></i>
            </li>

            <li className="text-nav-menu hover:text-font text-nowrap">
              Buy Photo
            </li>
          </ul>

          <i className="text-2xl cursor-pointer bx bxs-bookmark text-font"></i>

          <button className="items-center justify-center overflow-hidden bg-white rounded-full max-w-11">
            <img src={profile} alt="Logo" className="object-cover " />
          </button>
        </nav>

      {openDropdown && <DropdownCategory />}
    </>
  );
}
