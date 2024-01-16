import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({apiPath}) => {

  const { data:movies } = useFetch(apiPath);

  return (
    <main>
        <section>
          <div className='flex flex-wrap gap-4 mt-5 justify-center'>
            { movies && movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            )) }
            
          </div>
        </section>
      
    </main>
  )
}

