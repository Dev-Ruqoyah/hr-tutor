
"use client";

import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Component() {
  
  return (
    <Navbar fluid rounded className="bg-sky-700 px-8 py-3 fixed w-full z-10 ">
      <Navbar.Brand  href="#">
        <FontAwesomeIcon icon={faLaptop} className="text-yellow-400 text-xl"/>
        <span className="self-center whitespace-nowrap text-yellow-400 text-2xl font-semibold dark:text-white ">hr-tutor</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className=" font-semibold" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="/Home.js#about" className="text-yellow-400 font-semibold hover:text-white">
          About
        </Navbar.Link>
        <Navbar.Link href="/Home.js#service" className="text-yellow-400 font-semibold hover:text-white">Services</Navbar.Link>
        <Navbar.Link href="/Home.js#pricing" className="text-yellow-400 font-semibold hover:text-white">Pricing</Navbar.Link>
        <Navbar.Link href="/Home.js#contact" className="text-yellow-400 font-semibold hover:text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
