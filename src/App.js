import React from 'react';
import NavBar from './components/NavBar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'

function App() {
  return (
    <div className="App">
      <NavBar />

      
      <MDBContainer className="mt-5 pt-5">
        <MDBRow>
        <MDBCol md='6'>
        <div className="text-center">
        <h3> Track your orders</h3>
        <MDBBtn>Customer Login</MDBBtn>
          <img src="/images/tailor-customer-new.jpg" className="img-fluid" alt="logo"/>
        </div>
        

     
      
          </MDBCol>

          <MDBCol md='6'>
          <div className="text-center">  
              <h3> Manage your Tailoring Business for Free</h3>
              <MDBBtn>Login / Register</MDBBtn>       
            </div>
          <img src="/images/tailor-activities-new.jpg" className="img-fluid" alt="logo"/>
            
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
     
    </div>
  );
}

export default App;
