import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../../assets/images/xray.png';
import { CSSTransition } from "react-transition-group";

function Navbar(props) {
  const [isMenuOpen, setMenu] = useState(false)
  const showMenu = (isMenuOpen) ? "block" : "hidden";
  return (
    <nav>
      <div className="dark max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="/" className="flex items-center">
            <img src={logo} className="h-8 mr-2" alt="Xray Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--wash-black)]">Xray</span>
          </a>

          <button type="button" onClick={() => { setMenu(!isMenuOpen) }} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[var(--goblin-green)] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--goblin-green)] dark:text-[var(--wash-black)] dark:hover:bg-[var(--lex-green)] dark:focus:var(--lex-green)" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={"w-full md:block md:w-auto " + showMenu} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[var(--wash-black)] md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-[var(--goblin-green)] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>

              <li>
                <Link to="/users" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
              </li>

              <li>
                <Link to="/config" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Config</Link>
              </li>

              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>

            </ul>
          </div>
      </div>
    </nav>

  )
}

export default Navbar