import { useEffect, useState } from "react"
import { Card } from "../components"

export const MovieList = () => {

  const [movies, setMovies]=useState([])

  useEffect(()=> {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e08fdaedf1ced595a205509bab8db76d");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  },[])
  return (
    <main>
        <section>
          <div className='flex flex-wrap gap-4 mt-5 '>
            { movies && movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            )) }
            
          </div>




        </section>
      
    </main>
  )
}

