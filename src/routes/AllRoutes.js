import { Routes,Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="home - movieke" />} />
        <Route path="movie/:id" element={<MovieDetail apiPath="movie/{movie_id}" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="popular movies" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming movies" />} />
        <Route path="movies/trending" element={<MovieList apiPath="trending/movie/day" title="Trending" />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  )
}

