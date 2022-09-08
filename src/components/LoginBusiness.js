import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardImage } from 'mdb-react-ui-kit'

function LoginBusiness () {
    return (
        <div>
        <MDBContainer  className="mt-5 pt-3">
    <MDBRow className="mt-3 d-flex align-items-center text-center">
        
        <MDBCol md='6' className=''>
          <MDBCardBody>
            <MDBCardTitle>Business Login</MDBCardTitle>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6' className=''>
          <MDBCardImage src='/images/tailor-activities-new.png' alt='...' fluid />
        </MDBCol>
      </MDBRow> 

</MDBContainer>
    </div>
    );
}

export default LoginBusiness;