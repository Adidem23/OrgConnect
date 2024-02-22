import React from 'react'
import '../CSS/Sidebar.css'
import Meet from '../assets/meet.gif'
import Gpt from '../assets/gpt.gif'
import Review from '../assets/rating.gif'
import Model from '../assets/model.gif'

const Sidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className="f">
        <img src={Meet} alt="" style={{ width: '40%' }} />
        <a href="https://refmemeet.vercel.app" style={{ width: '40%', textDecoration: 'none', color: 'black' }}>Create Meet</a>
      </div>

      <div className="t">
        <img src={Model} alt="" style={{ width: '40%' }} />
        <a style={{ width: '50%', textDecoration: 'none', color: 'black' }} href='texttoimage-zeta.vercel.app'>Text to Image</a>
      </div>

      <div className="s">
        <img src={Gpt} alt="" style={{ width: '40%' }} />
        <a style={{ width: '30%', textDecoration: 'none', color: 'black' }} >Ask Gpt</a>
      </div>

      <div className="t">
        <img src={Review} alt="" style={{ width: '40%' }} />
        <a style={{ width: '30%', textDecoration: 'none', color: 'black' }} >FeedBack</a>
      </div>

      <div style={{height:'20%'}}>

      </div>
    </div>
  )
}

export default Sidebar