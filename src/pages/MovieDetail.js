import MovieImg from '../assets/movieImage.jpeg'

export const MovieDetail = () => {
  return (
    <main className='flex flex-wrap justify-center gap-3 my-5 py-5 dark:text-white '>
      <div className='max-w-full pr-10'>
        <img src={MovieImg} alt="Movie " />

      </div>

      <div className='pl-5'>

        <p className='text-4xl pb-5'>Society of the Snow</p>
        <p className='text-xl py-3'>
          On October 13, 1972, Uruguayan Air Force Flight 571, 
          chartered to take a rugby team to Chile, crashes into a 
          glacier in the heart of the Andes.
        </p>
        <div className='flex flex-wrap gap-5 py-3 my-3'>
          <span className='border-2 border-grey p-2 mr-5 rounded-lg' >Action </span>
          <span className='border-2 border-grey p-2 mr-5 ' >Action </span>
          <span className='border-2 border-grey p-2 mr-5 ' >Action </span>
          <span className='border-2 border-grey p-2 mr-5 ' >Action </span>

        </div>

        <div className="flex items-center my-2">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-xl dark:text-white">4.95</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-xl">73 reviews</a>
        </div>

        <p className='text-xl py-2'><span className='font-bold'>Runtime: </span> 144 min. </p>
        <p className='text-xl py-2'><span className='font-bold'>Budget: </span>  65500000 </p>
        <p className='text-xl py-2'><span className='font-bold'>Revenue: </span> 0 </p>
        <p className='text-xl py-2'><span className='font-bold'>Release Date: </span> 2023-12-13</p>
        <p className='text-xl py-2'><span className='font-bold'>IMDB Code: </span> tt16277242</p>
      </div>     
    </main>
  )
}
