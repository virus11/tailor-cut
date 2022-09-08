import React from 'react';
import NavBar from './components/NavBar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit'

function App() {
  return (
    <div className="App">
      <NavBar />

      
      <MDBContainer className="mt-5 pt-3">
        <MDBRow>

          <MDBCol md='6' className="mt-3">
            <MDBCard>
              <MDBRow>
                <MDBCol size='4' className='d-flex align-items-center'>
                  <MDBCardImage src='/images/tailor-customer-new.jpg' alt='...' fluid />
                </MDBCol>
                <MDBCol size='8'>
                  <MDBCardBody>
                    <MDBCardTitle>Track your orders</MDBCardTitle>
                    <MDBCardText>
                      <small className='text-muted'>Last updated 3 mins ago</small>
                    </MDBCardText>
                    <MDBBtn>Customer Login</MDBBtn>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className="mt-3">
            <MDBCard>
              <MDBRow>
                <MDBCol size='4' className='d-flex align-items-center'>
                  <MDBCardImage src='/images/tailor-activities-new.jpg' alt='...' fluid />
                </MDBCol>
                <MDBCol size='8'>
                  <MDBCardBody>
                    <MDBCardTitle>Manage your Tailoring Business for Free</MDBCardTitle>
                    <MDBCardText>
                      <small className='text-muted'>Last updated 3 mins ago</small>
                    </MDBCardText>
                    <MDBBtn>Login / Register</MDBBtn>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>         
        </MDBRow>
      </MDBContainer>
     
    </div>
  );
}

export default App;
