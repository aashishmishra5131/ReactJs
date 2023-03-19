import React from 'react';
import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
     <>

     {/* If this method will be use than page will be load again again  */}
     {/* <a href="/">Home</a>
     <a href="/about">About</a>
     <a href="/contact">Contact</a>
    */}

 {/* If you want to add css than change Link tag into NavLink tag. */}

    <Link to='/'>Home</Link>
    <Link to='/search'>Search</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>

     </>
    );
};
export default Nav;

