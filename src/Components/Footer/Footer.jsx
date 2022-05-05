import React from 'react'
import './Footer.css';



export default function Footer() {
  return (
    <div className='bottom--page'>
      <div className='bottom--info'>
          <img src='../Quarkhublogolight.png' alt='quark logo' className='foot--logo'/>
          <p>Follow us on</p>
          <img src='../facebooklogo.png' alt='facebook logo' className='soc--logo'/>
          <img src='../instalogo.png' alt='instagram logo' className='soc--logo'/>
          <img src='../twitterlogo.png' alt='twitter logo' className='soc--logo'/>
          <img src='../tiktoklogo.png' alt='tiktok logo' className='soc--logo'/>
          <p>© 2022 Quarkhub</p>
      </div>

      <div className='bottom--banner'>
      <img src='../footerbanner.png' alt='crypto image' className='foot--image'/>  
      </div>
    </div>
  )
}
