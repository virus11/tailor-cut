import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import '../App.css'

function NavBar() {
  return (
    
    <MDBNavbar  fixed='top' light bgColor='light'>
    <MDBContainer>
      <MDBNavbarBrand href='#'>
        <img
          src='/logos/logo96.png'
          height='30'
          alt=''
          loading='lazy'
        />
        Tailor Cut
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  );
}

export default NavBar;