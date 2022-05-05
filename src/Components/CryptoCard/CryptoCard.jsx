import React from 'react'
import './CryptoCard.css';




export default function CryptoCard({name, image, market, price, price_change}) {
  
  return (
    <div className="card__section">
    
    
    
    
    <div className='crypto-card'>
      <div className='top_row'>
      <div className="symbol__pic"><img src={image} alt="coin logo" />
      <h2>{name}</h2>
      </div>
      
      
      <div className="market__num"><h2>No.{market}</h2></div></div>
      
      <div className="price__card"><p>${price}</p></div>
      
      <div className="market_move"><p style={{color: Math.sign(price_change) < 0 ? "#cf202f" : "#0d8451"}}>{(price_change)}%</p></div>
      
      
      
      
      
      
      
    </div>
    </div>
  )
}
