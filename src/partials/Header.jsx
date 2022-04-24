import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

function Header(props) {
  const [top, setTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link
              to="/"
              className="block"
              aria-label="Cruip"
              onClick={() => {
                handleScroll(props.topRef.current);
              }}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            {/* Mobile menu*/}
            <section className="flex lg:hidden flex-grow justify-end ">
              <div
                className={isNavOpen ? "space-y-2 hidden" : "space-y-2 block"}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
              <div
                className={
                  isNavOpen
                    ? "block absolute w-full top-0 left-0 z-10"
                    : "hidden"
                }
              >
                <div
                  className="absolute top-0 right-0 px-4 py-4"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className=" flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#saveTheDate",
                      }}
                      onClick={() => {
                        handleScroll(props.dateRef.current);
                        setIsNavOpen(false);
                      }}
                    >
                      Fecha
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#saveTheDate",
                      }}
                      onClick={() => {
                        handleScroll(props.dateRef.current);
                        setIsNavOpen(false);
                      }}
                    >
                      Lugar
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#saveTheDate",
                      }}
                      onClick={() => {
                        handleScroll(props.dateRef.current);
                        setIsNavOpen(false);
                      }}
                    >
                      Mesa de regalos
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#confirmacion",
                      }}
                      onClick={() => {
                        handleScroll(props.rsvpRef.current);
                        setIsNavOpen(false);
                      }}
                    >
                      Confirmación
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            {/* Desktop menu */}
            <ul className="flex-grow justify-end flex-wrap items-center hidden lg:flex">
              <li className="px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300  rounded ">
                <Link
                  to={{
                    pathname: "/",
                    hash: "#saveTheDate",
                  }}
                  onClick={() => {
                    handleScroll(props.dateRef.current);
                  }}
                >
                  Fecha
                </Link>
              </li>
              <li className="px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300  rounded ">
                <Link
                  to={{
                    pathname: "/",
                    hash: "#saveTheDate",
                  }}
                  onClick={() => {
                    handleScroll(props.dateRef.current);
                  }}
                >
                  Lugar
                </Link>
              </li>
              <li className="px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300  rounded ">
                <Link
                  to={{
                    pathname: "/",
                    hash: "#saveTheDate",
                  }}
                  onClick={() => {
                    handleScroll(props.dateRef.current);
                  }}
                >
                  Mesa de regalos
                </Link>
              </li>
              <li className="px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300  rounded ">
                <Link
                  to={{
                    pathname: "/",
                    hash: "#confirmacion",
                  }}
                  onClick={() => {
                    handleScroll(props.rsvpRef.current);
                  }}
                >
                  Confirmación
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
