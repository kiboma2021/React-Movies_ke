import { Routes,Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing"/>} />
        <Route path="movie/:id" element={<MovieDetail apiPath="movie/{movie_id}" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />
        <Route path="movies/trending" element={<MovieList apiPath="trending/movie/day" />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  )
}

