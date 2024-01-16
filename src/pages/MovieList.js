import { Card } from "../components"
import { useFetch,useTitle } from "../hooks"

export const MovieList = ({apiPath,title}) => {

  const { data:movies } = useFetch(apiPath);
  useTitle({title});

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

