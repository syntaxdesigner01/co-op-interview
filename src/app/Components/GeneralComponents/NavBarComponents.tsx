"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
export default function NavBarComponents() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center h-16 w-full bg-white text-black md:px-10 px-4  py-10">
      <section>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-[200px] "
        />
      </section>
      <section className="hidden md:block">
        <ul className="flex justify-between items-center  gap-10 font-Inter">
          <li>Why Chain Co-op</li>
          <li>Our Story </li>
          <li>Membership Cards</li>
          <li>Contact</li>
        </ul>
      </section>
      <section>
        <button className="bg-secondary w-[12vw] font-medium h-12 rounded-md hidden md:block">
          Login{" "}
        </button>
      </section>

      <section className=" md:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <IoClose size={40} className="text-orange-600" />
          ) : (
            <CiMenuFries size={30} className="" />
          )}
        </button>
      </section>

      {showMenu && (
        <div className="fixed top-0 left-0 w-[90vw] font-semibold z-50 text-xl h-full text-black bg-white p-4 flex flex-col items-center justify-center md:hidden transition-transform duration-5000 ease-in-out transform translate-x-0">
          <ul className="flex flex-col gap-10">
            <li>Why Chain Co-op</li>
            <li>Our Story </li>
            <li>Membership Cards</li>
            <li>Contact</li>
            <li>
              <button className="bg-red-500 text-white w-full font-medium h-12 rounded-md ">
                Login{" "}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
