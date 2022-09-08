import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';

function LoginBusiness () {
    return (
        <div>
        <MDBContainer  className="mt-5 pt-3">
            <MDBRow className="mt-3 d-flex align-items-center text-center">
                
                <MDBCol md='6' className=''>
                <MDBCardBody>
                <h1>Business Login</h1>
                <MDBInput label='10 digit Mobile Number' id='typeMobileNumber' type='number' className='mt-5'/>
                <Link to="/homepage-business" className="mt-5 btn btn-primary">Get OTP</Link>
               
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