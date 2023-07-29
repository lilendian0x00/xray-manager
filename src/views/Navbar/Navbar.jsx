import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss'
import logo from '../../assets/images/xray.png';
import { CSSTransition } from "react-transition-group";
import { Spin as Hamburger } from 'hamburger-react'
import { routesMap } from '../Routes';

function Navbar(props) {
  const [isMenuOpen, setMenuButton] = useState(false)
  const [isMenuCSSOpen, setMenu] = useState(false)

  //const showMenu = (isMenuOpen) ? " block" : " hidden";
  const nodeRef = useRef(null);
  const location = useLocation().pathname;

  const phoneNavbar = routesMap.map((item) =>
    <li>
      <Link to={item.location} className={`flex flex-col justify-center items-center rounded-lg transition duration-150 ease-in-out hover:ease-in py-2 px-4 focus:pr-12 active:pr-12 ${(location.includes(item.location)) ? `bg-[var(--goblin-green)] text-black pr-12` : `hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`} `}>
        <item.icon size={26} color={(location.includes(item.location)) ? "black" : "white"} />
        <span>{item.name}</span>
      </Link>
    </li>
  )


  const desktopNavbar = routesMap.map((item) =>
    <li>
      <Link to={item.location} className={`block transition duration-150 ease-in-out hover:ease-in py-2 pl-3 pr-4 text-white rounded ${(location.includes(item.location)) ? `bg-[var(--goblin-green)]` : `hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}`}>{item.name}</Link>
    </li>
  )

  return (
    <nav className=''>
      <div className="dark flex md:flex-col flex-wrap md:flex-nowrap items-center justify-center p-4 h-full w-full">

        <a href="/" className="flex items-center">
          <img src={logo} className="h-8" alt="Xray Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--wash-black)]">Xray</span>
        </a>

        <button type="button" onClick={() => { setMenuButton(!isMenuOpen) }} className="inline-flex items-center md:hidden p-2 w-16 h-10 justify-center text-sm text-[var(--goblin-green)] rounded-xl focus:outline-none dark:text-[var(--wash-black)]">
          <Hamburger direction='left' distance='sm' size={32} duration={0.35} />
        </button>

        <div className={"hidden w-full h-full self-center md:block text-center flex-shrink outline-none"}>
          <ul className="font-medium text-base h-full flex flex-col outline-none flex-shrink justify-around items-center p-8 mt-2 border-0 rounded-xl bg-gray-50 dark:bg-[var(--wash-black)] shadow-lg shadow-black">
            {phoneNavbar}
          </ul>
        </div>

        <CSSTransition
          nodeRef={nodeRef}
          in={isMenuOpen}
          timeout={500}
          unmountOnExit
          classNames="my-node"
          onEnter={() => setMenu(true)}
          onExited={() => setMenu(false)}
        >
          <div ref={nodeRef} className={"w-full md:w-auto md:h-full text-center"} id="navbar-default">
            {isMenuCSSOpen &&
              <ul className="font-medium gap-2 flex flex-row md:flex-col justify-center items-center p-3 mt-2 border border-gray-100 rounded-lg bg-gray-50 dark:bg-[var(--wash-black)] dark:border-gray-700 shadow-md shadow-black">
                {desktopNavbar}
              </ul>
            }

          </div>

        </CSSTransition>
      </div>
    </nav>

  )
}

export default Navbar