import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };
  return (
    <>
    
     <div className="home  ">
      <div className= "home-content  text-light  ">
        <h1>Welcome to Uniqe – Where Style Meets Uniqueness</h1>
        <p className='fs-5'>Discover handpicked collections tailored just for you</p>
        <p className='fs-5'>Shop the latest trends in fashion, accessories, and more — all in one place</p>
        <button type="button" className="btn btn-outline-light" onClick={goToProducts}>shop now</button>

      </div>
    </div>

    
    </>
  )
}
