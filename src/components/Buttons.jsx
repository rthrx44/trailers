import React from 'react'

export const WatchButton = ({buttonClick, icon = '', displayText = 'Submit'}) => {
  return (
    <button 
      className='flex items-center justify-center gap-2 border border-zinc-500 rounded-s rounded-e font-sans text-sm font-normal text-white hover:text-white hover:bg-zinc-950 transition-all py-1 px-4 mx-2 lg:text-base xl:text-lg'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}
