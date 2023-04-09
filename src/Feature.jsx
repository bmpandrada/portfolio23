import React from 'react'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';

const Feature = () => {
  return (
            
    <div className="max-width">
    <h1 className="title">Services</h1>
      <div className="col-2-of-4">
      <div className="fbox f-1">
        <HtmlIcon  className='icon-f'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
      </div>
      <div className="fbox f-2">
      <CssIcon  className='icon-f'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
      </div>
      <div className="fbox f-3">
      <DesignServicesIcon  className='icon-f'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
      </div>
      <div className="fbox f-4">
      <DevicesIcon  className='icon-f'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
      </div>
      </div>
    </div>
  )
}

export default Feature