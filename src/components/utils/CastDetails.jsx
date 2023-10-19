import React from 'react'

const CastDetails = (props) => {
  return (
    <div className='px-2'>
      <img
          className="w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.profile_path}`}
          alt={props.data.id}
        />
      <p>{props.data.name}</p>
      <p>{props.data.character}</p>
    </div>
  )
}

export default CastDetails