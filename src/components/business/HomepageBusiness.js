import { MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function HomepageBusiness(){

    return (
        <div>
            <MDBContainer  className="mt-5 pt-3">
         <Link to="/admin-dashboard">Admin Dashboard</Link>
         </MDBContainer>
        </div>
    );
}

export default HomepageBusiness;