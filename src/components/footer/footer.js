import React from 'react'
import './footer.css'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"

const footer = () => {
  return (
    <div className='footer'>
    <div className='footer-content'>

    <div className='left'>
    <div className='hicon'>
    <FaHome size={20} style={{color:"#fff",marginRight:"2rem",}} />
    <p>India, Hyderabad</p></div>

    <div className='picon'>
    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    <p>+91 6305101298</p>
    </div>
    
    <div className='micon'>
    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    <p>aravindpatel837@gmail.com</p>
    </div>
    </div>

<div className='right'>
<h3>Social Media:</h3><br/>

<div className='Sicons'>
<a href='https://www.facebook.com/profile.php?id=100008791871884&sk=photos_by'> <FaFacebook size={30} style={{color:"#fff",marginRight:"2rem",}
} /></a>

<a href='https://www.linkedin.com/feed/'>
<FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem",}} />
</a>
<a href='https://github.com/AravindKumar-1431'>
<FaGithub size={30} style={{color:"#fff",marginRight:"2rem",}} />
</a>
<a href='https://www.instagram.com/?__coig_restricted=1'>
<FaInstagram size={30} style={{color:"#fff",marginRight:"2rem",}} />
</a>





</div>
</div>

    </div>
    </div>
  )
}

export default footer
