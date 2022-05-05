import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { Newscard } from './Newscard'
import "./Newscard.css"



export const News = () => {
  const [topNews, setTopNews] = useState([])


  useEffect(() => {axios.get('https://newsapi.org/v2/everything?q=crypto&sortBy=published_desc&pageSize=10&apiKey=78e2c4fcb32441fab387d3407dad4de2')
  
  .then((res) => { 
  setTopNews(res.data.articles)
  }
  ).catch((err) => console.log(err))},[])


console.log(topNews)


  return (
    <>
          
  <h1 className='crypto__title'>Crypto News</h1>
  
  
      <div className='news__section'>
          



          {topNews.map((object) => (
              <Newscard 
              
                    key={object.author}
                    author={object.author}
                    title={object.title}
                    urlToImage={object.urlToImage}
                    url={object.url}
                    description={object.description}/>
                    
          ))}
          
          </div>
          
          
    </>
    )
  }

