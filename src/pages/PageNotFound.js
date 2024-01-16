import { Link } from "react-router-dom"
import { Button } from "../components"
import pageNotFound from "../assets/pageNotFound.jpeg"
import { useEffect } from "react"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = "404 - Page not found!";
  });

  return (
    <main>
        <section className="flex flex-col justify-center">
          <div className="flex flex-col max-w-full justify-center my-5 ">
            <p className="flex justify-center my-5 dark:text-white text-2xl">Error 404, Page not found</p>
            <div className="flex justify-center">
              <img className="max-w-lg" src={pageNotFound} alt="Error 404!!!" />
            </div>
            
          </div>
          <div className="flex justify-center my-3">
            <Link to="/">
              <Button>Back to Home page</Button>
            </Link>
            
          </div>
        </section>
      
    </main>
  )
}
