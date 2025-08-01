import React ,{useState} from 'react'
import '../Products/products.css'
import { Link } from 'react-router-dom'
import '../Products/products.css'


export default function ProductCard({ product }) {
  return (
   <>
   <div className="container ">
        <div className="card my-card h-100 shadow-sm" >
        <div className="w-100 card-image">
            <img src={product.image} className="card-img-top p-2" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
          <p className="card-text fs-4">
            {product.price} $
          </p>
           <Link to={`/product/${product.id}`} className="btn my-btn">
          View Details
         </Link>
        </div>
      </div>
    </div>
   
   </>
  )
}
