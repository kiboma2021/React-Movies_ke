import { useEffect, useState } from 'react'
import MovieImg from '../assets/movieImage.jpeg'
import { useParams } from 'react-router-dom'
import { Button } from '../components'
export const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const params = useParams();

  const image = movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: MovieImg;



  useEffect(()=> {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e08fdaedf1ced595a205509bab8db76d`);
      const json= await response.json();
      setMovie(json)
    }
    fetchMovie();
  },[])
  
  return (
    <main>
      <section className='flex flex-wrap justify-center my-5 py-5 dark:text-white '>
        <div className='max-w-sm pr-10'>
          <img className='rounded' src={image} alt="Movie " />
        </div>

        <div className='max-w-2xl pl-5'>

          <p className='text-4xl pb-5'>{movie.title}</p>
          <p className='text-xl py-3'>
            {movie.overview }
          </p>
          <div className='flex flex-wrap gap-5 py-3 my-3'>
            {movie.genres && movie.genres.map((genre)=>(
              <span className='border-2 border-grey p-2 mr-5 rounded-lg' key={genre.id} >{genre.name} </span>
            )) }
            
          </div>

          <div className="flex items-center my-2">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-xl dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" className="text-xl">{movie.vote_count} reviews</a>
          </div>

          <p className='text-xl py-2'><span className='font-bold'>Runtime: </span> {movie.runtime} </p>
          <p className='text-xl py-2'><span className='font-bold'>Budget: </span>  {movie.budget} </p>
          <p className='text-xl py-2'><span className='font-bold'>Revenue: </span> {movie.revenue} </p>
          <p className='text-xl py-2'><span className='font-bold'>Release Date: </span> {movie.release_date}</p>
          <p className='text-xl py-2'><span className='font-bold'>IMDB Code: </span><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>{movie.imdb_id}</a> </p>
          <Button><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>Watch Official Trailer</a></Button>
          
        </div>   
      </section>
  
    </main>
  )
}
