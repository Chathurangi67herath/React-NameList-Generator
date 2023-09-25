import React from "react";
import { Link } from "react-router-dom";

function HeaderBar() {
    return(
        <React.Fragment>
         
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <Link to="/" className="nav-item"><a className=" nav-link">HOME</a></Link>
    <Link  to="/about" className="nav-item"><a className=" nav-link" >ABOUT</a></Link>
    <Link to="/namelist" className="nav-item"><a className=" nav-link" >DETAILS</a></Link>
    
      
    </ul>
  </div>
</nav>
        </React.Fragment>
    );
}
 
export default HeaderBar;