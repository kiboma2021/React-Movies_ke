import { Link,NavLink } from "react-router-dom"
import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
        <Link>
            <img src={Logo} alt="Logo" />
            <h2>Cinemate</h2>
        </Link>
        <div>
            <NavLink to=''>Home</NavLink>
            <NavLink to=''>Popular</NavLink>
            <NavLink to=''>Top Rated</NavLink>
            <NavLink to=''>Upcoming</NavLink>
        </div>
        <div>
            <span></span>
            
        </div>
      
    </header>
  )
}
