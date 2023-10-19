import React from 'react'
import { ViewInfo } from '../Buttons';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CastDetails = (props) => {
  console.log(props.data);
  return (
    <div className='px-2 flex flex-col'>
      <img
          className="w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.profile_path}`}
          alt={props.data.id}
        />
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="flex">
          <div className="flex-col">
            <p className="text-sm font-black lg:text-base">{props.data.name}</p>
            <p className='text-sm font-light lg:text-base'>{props.data.character}</p>
          </div>
        </div>
        <a href='/'>
          <ViewInfo
            icon={<InfoOutlinedIcon sx={{ fontSize: 20 }}/>}
            displayText="VIEW INFO"
          />
        </a>
      </div>
    </div>
  )
}

export default CastDetails