import React from "react";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-garden mb-1 font-serif">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white font-serif text-[40px] lg:text-[30px] md:text-[25px]"
              href="/"
            >
              4096
            </a>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item text-[35px] hover:bg-clay hover:rounded-full">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold text-white hover:no-underline"
                  href="highscores"
                >
                  <span className="ml-2">High Scores</span>
                </a>
              </li>
              <li className="nav-item hover:bg-clay hover:rounded-full hover:text-sage">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:no-underline"
                  href="/howtoplay"
                >
                  <span className="ml-2">How to Play</span>
                </a>
              </li>
              <li className="nav-item hover:bg-clay hover:rounded-full hover:text-sage">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-sage hover:no-underline"
                  href="/me"
                >
                  <span className="ml-2">Profile</span>
                </a>
              </li>
              {Auth.loggedIn() ? (
                <>
                  <li className="nav-item hover:bg-clay hover:rounded-full hover:text-sage hover:no-underline">
                    <button
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-sage"
                      onClick={logout}
                    >
                      <span className="ml-2">Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item hover:bg-clay hover:rounded-full hover:text-sage">
                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-sage hover:no-underline"
                      href="/login"
                    >
                      <span className="ml-2">Login</span>
                    </a>
                  </li>
                  <li className="nav-item hover:bg-clay hover:rounded-full hover:text-sage">
                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-sage hover:no-underline"
                      href="/signup"
                    >
                      <span className="ml-2">Sign up</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
