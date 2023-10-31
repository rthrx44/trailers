import React from 'react'
import Trailers from './assets/Trailers-Logo.png' 
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';

function Navbar () {
  return (
    <>
      <div className="drawer drawer-end sticky top-0 z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <header className='flex justify-between items-center bg-[#141414] color-[#fff] pl-4 py-2 md:py-4 2xl:container 2xl:mx-auto'>
            <div>
              <a href="/">
                <img src={Trailers} alt="Trailers Logo" className='h-5 xs:h-6 lg:h-7 xl:h-8' />
              </a>
            </div>
            <div className='flex items-center md:gap-6'>
              <form className='tracking-widest relative'>
                <input type="text" placeholder='SEARCH' className='pl-2 pr-7 py-1 w-32 rounded-sm text-xs font-semibold bg-[#3b3b3b] outline-none focus:outline-1 focus:outline-red-700 transition-all ease-in-out lg:text-sm lg:w-48 xl:text-base xl:w-72' />
                <div className='absolute top-0 right-0 h-full px-1 flex items-center'>
                  <SearchIcon sx={{ fontSize: 20 }}/> 
                </div>
              </form>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent border-none outline-none hover:bg-transparent hover:text-red-700 active:text-red-700 md:hidden"><MenuOpenIcon/></label>            
              <ul className='gap-6 text-xs tracking-widest hidden md:flex md:items-center md:pr-4 lg:text-sm xl:text-base text-[#fff]'>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'><a href="/">HOME</a></li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'>BROWSE</li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'><a href="/discover/movie">MOVIES</a></li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'><a href="/discover/tv">TV SHOWS</a></li>
              </ul>
            </div>
          </header>
        </div> 
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            {/* Sidebar content here */}
          <ul className="menu p-4 w-3/6 flex justify-center items-center h-full bg-[#141414] color-[#fff] text-xs gap-8 tracking-widest lg:text-sm xl:text-base text-[#fff]">
            <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'><a href="/">HOME</a></li>
            <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'>BROWSE</li>
            <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'><a href="/discover/movie">MOVIES</a></li>
            <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'><a href="/discover/tv">TV SHOWS</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar;