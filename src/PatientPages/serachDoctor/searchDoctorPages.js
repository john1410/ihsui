import React,{Component} from "react";
import ListDocotorSearch from "./ListDocotorSearch";
import axios from "axios";
import SideProfile from "../profile/sideProfile";
import {connect} from "react-redux";
import {setToken, setUser} from "../../action";
import {withRouter} from "react-router-dom";
import {Helper} from "../../api/urlApi";
class SearchDoctorPages extends Component{
constructor(props) {
    super(props);
    this.state={
        datas:[],
        payload:false,
        searchTermBarValue:'',
    }
    this.onChangedSearchBar = this.onChangedSearchBar.bind(this);
}
onChangedSearchBar (searchTerm) {
this.setState({
    searchTermBarValue:searchTerm.target.value,
})
}

    render() {
    const {token,user} = this.props;
        const getDoctorData=async ()=>{
            const tokenApi = token ? token : JSON.parse(localStorage.getItem('token'));
            console.log('hiii');
            console.log(JSON.parse(localStorage.getItem('token')));
            console.log(JSON.parse(localStorage.getItem('user')));
            console.log('hi');
            console.log(token);
            console.log(user);
            console.log(this.state.searchTermBarValue);
            const doctorData = (await axios.get(Helper.searchDoctor + this.state.searchTermBarValue, {
                headers:{ 'Authorization': Helper.authtype + tokenApi},
            })).data;
            console.log('hiu');
            console.log(doctorData);
            this.setState({
                datas:doctorData,
            })

            // const datas =(await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
            // this.setState({
            //     datas:datas,
            // })
        }
const name =(JSON.parse(localStorage.getItem('user')));
        // user?user.username:JSON.parse(localStorage.getItem('user'));
        return(
            <div className='row'>
                <div className='col-md-3'>
                    <SideProfile name={name.username}/>
                </div>
                <div className='col-md-8' style={{margin:'0 auto'}}>

                <div className='container-search-bar'>
                    <div className='row'>
                        <input placeholder='' className='col-md-8 m-2' value={this.state.searchTermBarValue} onChange={this.onChangedSearchBar}/>
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
