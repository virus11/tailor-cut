import React from 'react';
import {
  MDBContainer,
  MDBNavbar
} from 'mdb-react-ui-kit';
import '../App.css'
import { Link } from 'react-router-dom';

function NavBar() {
  //const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  return (
    
    <div>
     <MDBNavbar  fixed='top'>
    <MDBContainer>
     
    <Link to="/" className="fs-4 text-dark">
        <img
          src='/logos/logo96.png'
          height='30'
          alt=''
          loading='lazy' className="pe-2"
        />  
        Tailor Cut
      </Link>
    </MDBContainer>
  </MDBNavbar>
      </div>
  );
}

export default NavBar;