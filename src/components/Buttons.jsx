import React from 'react'

export const WatchButton = ({buttonClick, icon = '', displayText = 'Submit'}) => {
  return (
    <button 
      className='flex items-center justify-center border border-zinc-500 rounded-s rounded-e text-[10px] leading-[14px] font-bold text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 transition-all py-1 px-4 mx-2 gap-1 2xs:text-xs xs:text-[11px] xs:leading-[13px] xl:text-sm'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}

export const LightButton = ({buttonClick, icon = '', displayText = 'Submit'}) => {
  return (
    <button 
      className='flex items-center justify-center border border-white rounded-s rounded-e text-[10px] leading-[14px] font-bold text-white hover:text-white hover:bg-zinc-900 transition-all py-1 px-4 mx-2 gap-1 2xs:text-xs xs:text-[11px] xs:leading-[13px] xl:text-sm'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}

