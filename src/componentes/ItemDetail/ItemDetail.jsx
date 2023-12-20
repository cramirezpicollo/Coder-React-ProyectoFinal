import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis neque autem sit officia omnis ea vitae fugit commodi dolores quidem veritatis dolorum ab, delectus dignissimos illo soluta beatae suscipit!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail