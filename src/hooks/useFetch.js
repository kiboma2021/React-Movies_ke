import { useState,useEffect } from "react";


export const useFetch = (apiPath) => {
    const [ data, setData ] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=e08fdaedf1ced595a205509bab8db76d`;


    useEffect(()=> {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      },[url])


  return {data}
}
