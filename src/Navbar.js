import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const user=useSelector((state)=>state.user)



  return (
    <nav className="navbar">
        <span>Header</span>
    <ul>
        
      
        {
        
        user? <li><Link to="/profile"  
        > 
             Signup
            </Link> </li>  : 
        <li><Link to="/signup">Signup</Link></li>

        }
      
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    
  </nav>
  )
}

export default Navbar