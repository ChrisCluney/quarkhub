import React from 'react'
import './Favorites.css'




export default function FavoritesCard({id, image, market, price, price_change_percentage_24h}) {

    return (
      <div className='fav-card'>
        <img src={image} alt="coin logo" />
        <h3>{market}</h3>
        <p>{id}</p>
        <p>{price}</p>
        <p style={{color: Math.sign(price_change_percentage_24h) === -1 ? "red" : "green"}}>{(price_change_percentage_24h)}%</p>
        
      </div>
  )
}
