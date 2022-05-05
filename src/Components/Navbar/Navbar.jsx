
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';
import { Button as MatButton } from '@mui/material';

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };






  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <div className='navbar'>

            <div>
              <Link to='#' className='menu-bars1'>
                
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
                     <div className='top--logo--and--title'>
                        <img src='../menulogo.png' alt='logo' className='menu--logo'/>
            
                        <div className='title--header' >
                            <img src='../titlelogo.png' alt='title heading' /></div>
                      
                            <div className="logged--message">
                                    Hello Welcome <br />
                                    {user && user.email}
                            </div>

                            <div className="logout--button">
                                    <MatButton variant="outlined" color="primary" onClick={handleLogout}>
                                      Log out
                                    </MatButton>
                            </div>
                      </div>


      
      
     


        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>

                  
                );
              })}
            </ul>


            




          </nav>


          
        
      </IconContext.Provider>
    </>
  );
}
