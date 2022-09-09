import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit'
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

function HomepageBusiness(){

    return (
            <MDBContainer  className="mt-5 pt-3">
                <MDBRow className="mt-3 d-flex align-items-center text-center">                        
                    <MDBCol md='6' className=''>
                        <MDBCardBody>
                            <h3>Welcome</h3>
                            <Typography variant="h3" gutterBottom className="text-primary">Trimurty Tailors</Typography>
                            <MDBInput label='4 digit PIN' id='typeMobileNumber' type='number' className='mt-3'/>
                            <Link to="/admin-dashboard" className="mt-3 btn btn-primary">Enter</Link>                    
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol md='6' className=''>
                        <MDBCardImage src='/images/enter-pin.png' alt='...' fluid />
                    </MDBCol>
                </MDBRow> 
            </MDBContainer>
        );
}

export default HomepageBusiness;