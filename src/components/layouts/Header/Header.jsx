import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { AuthUserPopover } from "../../AuthUserPopover";
import React, { useState,useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../Logo";
import SearchInput from "../Search/SearchInput";

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);


  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setIsNavbarVisible(false);
  };

  const handleSearchClose = () => {
    setIsSearchActive(false);
    setIsNavbarVisible(true);
  };
// Close the search bar when clicked outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      handleSearchClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup the event listener when the component unmounts
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div className="mt-4">
      <Navbar className="bg-black" hideOnScroll={isSearchActive}>
      <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {isNavbarVisible && (
          
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
            <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
                }
              >
                 <button
                onClick={handleSearchClick}
                className="text-white flex items-center"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
              </NavLink>
             
            </NavbarItem>
          </NavbarContent>
        )}
        {isSearchActive && (
          <NavbarContent justify="center">
            <NavbarItem ref={searchRef}>
              <div className="w-full max-w-3xl">
                <SearchInput onClose={handleSearchClose} />
              </div>
            </NavbarItem>
          </NavbarContent>
        )}
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <AuthUserPopover />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
