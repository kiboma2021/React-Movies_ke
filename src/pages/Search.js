import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm= searchParams.get("q");

  const { data:movies } = useFetch(apiPath,queryTerm);

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