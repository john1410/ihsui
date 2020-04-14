import React,{Component} from "react";
import Docimg from './docotr.png';
import { withRouter } from "react-router-dom";

class DoctorPage extends Component{

constructor(props) {
        super(props);
        this.state={

        }
    }


render() {
    const {id} = this.props.match.params;

    console.log(id)
    const doctorShowData =JSON.parse(localStorage.getItem('doctors'));
    const showDoctor = doctorShowData.filter(itm=>itm.userId == id)[0];
    console.log(showDoctor);
    return(
          <div className='container container-fluid'>
              <img src={Docimg} alt={showDoctor.userfullname} style={{height:'200px'}}/>
            <h1>{showDoctor.userfullname}</h1>
              <h2>{showDoctor.medicalCouncilId}</h2>
          </div>
        );
    }

}

export default withRouter(DoctorPage);