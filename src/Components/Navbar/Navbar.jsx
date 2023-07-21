import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../../assets/images/xray.png';
import { CSSTransition } from "react-transition-group";
import { Spin as Hamburger } from 'hamburger-react'

function Navbar(props) {
  const [isMenuOpen, setMenu] = useState(false)
  const showMenu = (isMenuOpen) ? " block" : " hidden";
  const nodeRef = useRef(null);
  return (
    <nav>
      <div className="dark max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-2" alt="Xray Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--wash-black)]">Xray</span>
        </a>

        <button type="button" onClick={() => { setMenu(!isMenuOpen) }} className="inline-flex items-center p-2 w-16 h-10 justify-center text-sm text-[var(--goblin-green)] rounded-xl md:hidden focus:outline-none dark:text-[var(--wash-black)]">
          <Hamburger direction='left' distance='sm' size={25} duration={0.35}/>
        </button>


          <CSSTransition nodeRef={nodeRef} in={isMenuOpen} timeout={500} classNames="">

            <div ref={nodeRef} className={"w-full md:block md:w-auto" + showMenu} id="navbar-default">
              <ul className="font-medium flex flex-row justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[var(--wash-black)] md:dark:bg-gray-900 dark:border-gray-700">
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
          </CSSTransition>
      </div>
    </nav>

  )
}

export default Navbar