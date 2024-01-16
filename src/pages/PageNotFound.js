import { Button } from "../components"
import pageNotFound from "../assets/pageNotFound.jpeg"

export const PageNotFound = () => {
  return (
    <main>
        <section className="flex flex-col justify-center">
          <div className="flex flex-col max-w-2xl">
            <p className="flex justify-center">Error 404, Page not found</p>
            <img src={pageNotFound} alt="Error 404!!!" />
          </div>
          <div className="flex justify-center">
            <Button>Back to Home page</Button>
          </div>
        </section>
      
    </main>
  )
}
