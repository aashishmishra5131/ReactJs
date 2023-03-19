 import React from 'react';

 const Navbar=()=>{
    return(
        <>
       <div className="container-fluid nav_bg">
           <div className='row'>
           <div className='col-10 mx-auto'>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
</div>
       
        </>
    );
 };
 export default Navbar;