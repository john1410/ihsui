import React,{Component} from "react";
import ListDocotorSearch from "./ListDocotorSearch";
import axios from "axios";
import SideProfile from "../profile/sideProfile";
import {connect} from "react-redux";
import {setToken, setUser} from "../../action";
import {withRouter} from "react-router-dom";
class SearchDoctorPages extends Component{
constructor(props) {
    super(props);
    this.state={
        datas:[],
        payload:false
    }
}
    render() {
    const {token,user} = this.props;
        const getDoctorData=async ()=>{
            console.log('hi');
            //todo: get user seacrh
            const datas =(await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
            this.setState({
                datas:datas,
            })
        }

        return(
            <div className='row'>
                <div className='col-md-3'>
                    <SideProfile name='reza'/>
                </div>
                <div className='col-md-8' style={{margin:'0 auto'}}>

                <div className='container-search-bar'>
                    <div className='row'>
                        <input placeholder='' className='col-md-8 m-2'/>
                        <button placeholder='' className='col-md-2' onClick={getDoctorData}>search</button>
                    </div>

                </div>
                <div className='row'>
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                <ListDocotorSearch datas={this.state.datas} />
                </div>


            </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        user : state.user ,
        token : state.token ,
    }
};
export default connect(mapStateToProps , {setToken,setUser})(withRouter(SearchDoctorPages));
