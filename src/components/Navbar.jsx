import React from 'react'
import Trailers from './assets/Trailers.png' 
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function Navbar () {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <header className='flex justify-between items-center bg-black pl-4'>
            <div>
              <img src={Trailers} alt="Trailers Logo" className='h-5' />
            </div>
            <div>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent border-none hover:bg-transparent active:text-red-600 md:hidden"><MenuRoundedIcon/></label>            
              <ul className='flex gap-6'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </header>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-3/6 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className='flex justify-center'>
              <img src={Trailers} alt="Trailers Logo" className='h-5'/>
            </div>
            <ul>

            </ul>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar;