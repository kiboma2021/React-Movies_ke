import { Routes,Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MovieList />}>  </Route>
        <Route path="detail" element={<MovieDetail />} ></Route>
        <Route path="search" element={<Search />} ></Route>
        <Route path="error" element={<PageNotFound />} ></Route>
        <Route path="*" element={<MovieList />} ></Route>
      
    </Routes>
  )
}

