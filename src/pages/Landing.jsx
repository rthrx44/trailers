import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function Landing() {
  const [movies, setMovies] = useState([])

  const fetchMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=2f1b97f3c5516282fbe25825bb55595c')
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(err => console.error('error:' + err));
  }

  useEffect(() => {
    fetchMovie()
  })

  return (
    <div>
      <Navbar/>
      <section>
        <div>
          {movies.map((movie, idx) => (
            <div key={idx}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.id}/>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Landing