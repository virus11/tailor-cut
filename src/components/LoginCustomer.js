import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit'


function LoginCustomer(){
    return (
        <div>
            <MDBContainer  className="mt-5 pt-3">
        <MDBRow className="mt-3 d-flex align-items-center text-center">
            
            <MDBCol md='6' className=''>
              <MDBCardBody>
              <h1>Customer Login</h1>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='6' className=''>
              <MDBCardImage src='/images/tailor-customer-new.png' alt='...' fluid />
            </MDBCol>
          </MDBRow> 

  </MDBContainer>
        </div>
    );

}

export default LoginCustomer;