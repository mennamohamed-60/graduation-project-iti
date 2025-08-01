import React ,{useState , useEffect} from "react";
import { Link, NavLink  } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

   useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
       <nav className={`my-nav navbar navbar-expand-lg fixed-top ${scroll ? "scrolled" : ""}`}>
        <div className="container-fluid container">
          <Link className="navbar-brand text-light fs-2 fw-bold" to="/">
            Unique
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink className="nav-link text-light fs-4 fw-medium me-3 " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link text-light fs-4 fw-medium" to="/products">
                Products
              </NavLink>
              
               
             
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
