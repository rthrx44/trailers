import React from 'react'

export const WatchButton = ({buttonClick, icon = '', displayText = 'Watch'}) => {
  return (
    <button 
      className='flex items-center justify-center w-full border border-zinc-500 rounded text-[10px] leading-[14px] font-bold text-zinc-500 hover:text-white hover:border-white hover:bg-zinc-900 active:text-zinc-500 active:border-zinc-500 active:bg-transparent transition-all py-1 pr-2 gap-1 2xs:text-xs xs:text-[10px] xs:leading-[13px] lg:text-[11px]'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}

export const LightButton = ({buttonClick, icon = '', displayText = 'Watch'}) => {
  return (
    <button 
      className='flex items-center justify-center border border-white rounded text-[10px] leading-[14px] font-bold text-white hover:text-white hover:bg-zinc-900 active:text-zinc-500 active:border-zinc-500 transition-all py-1 px-4 gap-1 2xs:text-xs xs:text-[11px] xs:leading-[13px] xl:text-sm'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}

export const ViewInfo = ({buttonClick, icon = '', displayText = 'View'}) => {
  return (
    <button 
      className='flex items-center justify-center w-full border border-zinc-500 rounded text-[10px] leading-[14px] font-bold text-zinc-500 hover:text-white hover:border-white hover:bg-zinc-900 active:text-zinc-500 active:border-zinc-500 active:bg-transparent transition-all py-1 gap-1 2xs:text-xs xs:text-[10px] xs:leading-[13px] lg:text-[11px]'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}

export const PageButton = ({buttonClick, icon = ''}) => {
  return (
    <button 
      className='flex items-center justify-center border border-zinc-500 rounded text-[10px] leading-[14px] font-bold text-zinc-500 hover:text-white hover:border-white hover:bg-zinc-900 active:text-zinc-500 active:border-zinc-500 active:bg-transparent transition-all py-1 px-2 gap-1 2xs:text-xs xs:text-[10px] xs:leading-[13px] lg:text-[11px]'
      onClick={buttonClick}>
        {icon}
    </button>
  )
}
