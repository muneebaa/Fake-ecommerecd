import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function ProductComponent() {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.map(product => {
    const {id,title,image,price,category} = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`} >
          <div className="card-component-main">
            <div className='card-image'>
              <img src={image} />
            </div>
            <div className='card-info'>
              <h3 className="card-info-title">{title}</h3>
              <h3 className="card-info-price">$ {price}</h3>
              <p className="card-info-category">{category}</p>
            </div>
          </div>
        </Link>
      </div>

    )

  })
  return (
    <div className='card-wrapper'>
      {renderList}
    </div>
  )
}