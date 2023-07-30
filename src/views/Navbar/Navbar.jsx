import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import './Navbar.scss'
import logo from '../../assets/images/xray.png';
import { routesMap } from '../Routes';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

function Navbar(props) {
  //const showMenu = (isMenuOpen) ? " block" : " hidden";
  const location = useLocation().pathname;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });

  const desktopNavbar = routesMap.map((item, index) =>
    <li key={index}>
      <Link to={item.location} className={`flex flex-col justify-center items-center rounded-lg transition duration-150 ease-in-out hover:ease-in py-2 px-4 focus:pr-12 active:pr-12 ${(location.includes(item.location)) ? `bg-[var(--goblin-green)] text-black pr-12` : `hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`} `}>
        <item.icon size={26} color={(location.includes(item.location)) ? "black" : "white"} />
        <span>{item.name}</span>
      </Link>
    </li>
  )


  const phoneNavbar = routesMap.map((item, index) =>
    <li key={index}>
      <Link to={item.location} className={`flex flex-col items-center transition duration-150 ease-in-out hover:ease-in w-48 py-2 text-white rounded ${(location.includes(item.location)) ? `bg-[var(--goblin-green)]` : `hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}`}>
        <item.icon size={26} color={(location.includes(item.location)) ? "black" : "white"} />
        <span className={`${(location.includes(item.location)) ? `text-[var(--wash-black)]` : `text-[var(--creamy)]`}`}>{item.name}</span>
      </Link>
    </li>
  )

  const [navbar, setNavbar] = useState(false)

  const openCloseNavbar = () => {
    if (navbar) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }

  return (
    <div className='z-10'>
      {isDesktopOrLaptop ?
        <div className={`dark flex flex-col flex-nowrap items-center justify-center p-4 h-full w-full`}>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8" alt="Xray Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--wash-black)]">Xray</span>
          </a>
          <div className={"hidden w-full h-full self-center md:block text-center flex-shrink outline-none"}>
            <ul className="font-medium text-base h-full flex flex-col outline-none flex-shrink justify-around items-center p-8 mt-2 border-0 rounded-xl bg-gray-50 dark:bg-[var(--wash-black)] shadow-lg shadow-black">
              {desktopNavbar}
            </ul>
          </div>
        </div>
        :
        <div>
          <div className={`transition-all duration-300 opacity-100 ${navbar ? `z-0 absolute h-full w-full bg-black opacity-70` : ``}`}>
          </div>

          <div className='z-10'>
            <div className={`absolute transition-all duration-300 ${navbar ? `left-56 top-1/4 border-2` : `left-0 top-1/4 border-2`} p-2 bg-[var(--wash-black)] border-l-0 rounded-r-2xl border-[var(--lex-green)]`}>
              {navbar ?
                < AiOutlineDoubleLeft className='cursor-pointer' onClick={openCloseNavbar} size={24} color='#D9D9D9' />
                :
                < AiOutlineDoubleRight className='cursor-pointer' onClick={openCloseNavbar} size={24} color='#D9D9D9' />
              }

            </div>

            <div className={`dark fixed bg-[var(--wash-black)] rounded-r-2xl border-[var(--goblin-green)] transition-all duration-300 h-full ${navbar ? "w-56 border-r-8" : "w-0"} top-0 left-0 overflow-x-hidden md:flex-col flex-wrap md:flex-nowrap`}>

              <div className='flex flex-col p-4'>
                <a href="/" className="flex justify-center items-center border-0 rounded-3xl bg-[var(--creamy)]">
                  <img src={logo} className="h-8" alt="Xray Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--wash-black)]">Xray</span>
                </a>
              </div>

              <ul className="font-medium gap-8 flex flex-col md:flex-col justify-center items-center mt-6 border-0 border-gray-100 rounded-lg">
                {phoneNavbar}
              </ul>

            </div>
          </div>
        </div>
      }



    </div>


  )
}

export default Navbar