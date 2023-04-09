import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
const [toggle, setToggle] = useState(true);

const show = () => {
    setToggle(!toggle)
}
  return (
    <header className="max-width">
     <div className="navbar-logo">
        <h1 className="text-logo">
          Folio
        </h1>
      </div>
      <nav className="navbar">
        <ul className={`${!toggle ? "navbar-list shows": "navbar-list"}`}>
          <li onClick={show} className="item"><a href="#">Home</a></li>
          <li onClick={show} className="item"><a href="#">About</a></li>
          <li onClick={show} className="item"><a href="#">Project</a></li>
          <li onClick={show} className="item btn"><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="burger" onClick={show}>
          {toggle ? <MenuIcon className='burger-icon'/> 
          : <CloseIcon className='burger-icon'/>}  
            
        </div>
     </header>
  )
}

export default Header