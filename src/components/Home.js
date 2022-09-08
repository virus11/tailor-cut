import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';

function Home() {
    return(

        <MDBContainer className="mt-5 pt-3">
        <MDBRow>

          <MDBCol md='6' className="mt-3">
            <MDBCard>
              <MDBRow>
                <MDBCol size='4' className='d-flex align-items-center'>
                  <MDBCardImage src='/images/tailor-customer-new.png' alt='...' fluid />
                </MDBCol>
                <MDBCol size='8' className='d-flex align-items-center'>
                  <MDBCardBody>
                    <MDBCardTitle>Track your orders</MDBCardTitle>
                    <Link to="/login-customer" className="btn btn-primary">Customer Login</Link>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className="mt-3">
            <MDBCard>
              <MDBRow>
                <MDBCol size='4' className='d-flex align-items-center'>
                  <MDBCardImage src='/images/tailor-activities-new.png' alt='...' fluid />
                </MDBCol>
                <MDBCol size='8' className='d-flex align-items-center'>
                  <MDBCardBody>
                    <MDBCardTitle>Manage your Tailoring Shop</MDBCardTitle>
                    <Link to="/login-business" className="btn btn-primary">Business Login</Link>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>         
        </MDBRow>

        <MDBRow className="mt-3 d-flex align-items-center text-center">
            
                <MDBCol md='6' className=''>
                  <MDBCardBody>
                    <MDBCardTitle>Connecting Customers and Tailoring Shops</MDBCardTitle>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md='6' className=''>
                  <MDBCardImage src='/images/tailor-activities.jpg' alt='...' fluid style={{ maxWidth: 200}} />
                </MDBCol>
              </MDBRow> 

      </MDBContainer>
    );
}

export default Home;