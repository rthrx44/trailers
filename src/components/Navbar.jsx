import React from 'react'
import Trailers from './assets/Trailers.png' 
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar () {
  return (
    <>
      <div className="drawer drawer-end sticky top-0 z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <header className='flex justify-between items-center bg-[#141414] color-[#fff] pl-4 py-2 md:py-4 2xl:container 2xl:mx-auto'>
            <div>
              <img src={Trailers} alt="Trailers Logo" className='h-5 xs:h-6 lg:h-7 xl:h-8' />
            </div>
            <div className='flex items-center md:gap-6'>
              <form className='tracking-widest relative'>
                <input type="text" placeholder='SEARCH' className='pl-2 py-1 w-32 rounded-sm text-xs font-semibold outline-none focus:outline-1 focus:outline-red-700 transition-all ease-in-out lg:text-sm lg:w-48 xl:text-base xl:w-72' />
              </form>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent border-none outline-none hover:bg-transparent hover:text-red-700 active:text-red-700 md:hidden"><MenuOpenIcon/></label>            
              <ul className='gap-6 text-xs tracking-widest hidden md:flex md:items-center md:pr-4 lg:text-sm xl:text-base text-[#fff]'>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'>HOME</li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'>MOVIES</li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'>TV SHOWS</li>
                <li className='hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out'>BROWSE</li>
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent px-0 border-none outline-none hover:bg-transparent hover:text-red-700 active:text-red-700"><MenuOpenIcon/></label>            
              </ul>
            </div>
          </header>
        </div> 
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            {/* Sidebar content here */}
          <ul className="menu p-4 w-3/6 min-h-full text-base-content bg-[#141414] color-[#fff] gap-6">
            <div className='flex justify-center'>
              <img src={Trailers} alt="Trailers Logo" className='h-5 xs:h-6 lg:h-7'/>
            </div>
            <div className='flex flex-col justify-center items-center text-xs gap-8 tracking-widest lg:text-sm xl:text-base text-[#fff]'>
              <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'>HOME</li>
              <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'>MOVIES</li>
              <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'>TV SHOWS</li>
              <li className='cursor-pointer hover:text-red-700 font-semibold md:hidden'>WATCH LIST</li>
              <li className='border-b border-[#fff] w-24 md:hidden'></li>
              <h4 className='font-extrabold tracking-widest text-red-700'>GENRE</h4>
              <li className='cursor-pointer hover:text-red-700 md:flex'>ACTION</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>ADVENTURE</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>ANIMATION</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>COMEDY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>CRIME</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>DOCUMENTARY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>DRAMA</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>FAMILY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>FANTASY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>HISTORY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>HORROR</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>MUSIC</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>MYSTERY</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>ROMANCE</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>SCIENCE FICTION</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>TV MOVIE</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>THRILLER</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>WAR</li>
              <li className='cursor-pointer hover:text-red-700 md:flex'>WESTERN</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar;