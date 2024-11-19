import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"; // Import NavLink
import { AuthUserPopover } from "../AuthUserPopover";
import React, { useEffect } from 'react';
import { Logo } from "../Logo";

export default function Header() {

  return (
    <di className="mt-4">
      <Navbar className="bg-black">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-8 text-white" justify="center">
          <NavbarItem>
            <NavLink
              to="/home" 
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }
            >
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/browser"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }
            >
              Movies
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }
            >
              Series
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <FontAwesomeIcon
              icon={faSearch}
              className="hover:text-red-500 text-white text-1xl cursor-pointer"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <AuthUserPopover />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </di>
  );
}
