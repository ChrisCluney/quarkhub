import axios from 'axios'
import {useEffect, useState} from 'react'
import CryptoCard from '../CryptoCard/CryptoCard'
import "./Dashboard.css"
import cryptobot from "./Pics/cryptobot.png" 
import { Link } from 'react-router-dom';



export const Dashboard = () => {
    const [topTen, setTopTen] = useState([])

    
    
    
    useEffect(() => {axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&market_cap_asc&per_page=10&sparkline=true")
    .then((res) => { 
    setTopTen(res.data)
    }
    ).catch((err) => console.log(err))},[])
    
        console.log(topTen)



  return (
    <div className='container_dash'>
        
        
        <div className="front__imgs">
        <div><img src={cryptobot} alt="robot picture" /></div>
        <div><img src={cryptobot} alt="robot picture" /></div>
        </div>
    
    
    <div className='main'>
        
        {topTen.map((object) => (
            <Link to={`../coins/${object.id}`}>
            <CryptoCard key={object.id}
                  image={object.image}
                  name={object.name}
                  price={object.current_price} 
                  market={object.market_cap_rank}  
                  price_change={object.price_change_percentage_24h} /></Link>
                  
        ))}
        
        </div>
    </div>
  )
}
