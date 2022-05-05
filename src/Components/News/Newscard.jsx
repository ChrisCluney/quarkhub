import React from 'react'
import './Newscard.css';





export const Newscard = ({author, title, urlToImage, description, url}) => {

 
  
  return (
 <>
<section className='cards'>

<a href={url} target="_blank" rel="noreferrer" className="card">
  <div className="card__image" style={{backgroundImage: `url(${urlToImage})` }}> </div>

  <div className="card__content">

     <div className="card__title">{title}</div>
  <div className="card__snippet">{description}</div>
  </div>
 
  <div className="card__readmore">READ MORE</div>
</a>


  
  </section>
  </>



    
  );
}

   





  