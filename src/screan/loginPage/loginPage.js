import React from "react";
import './loginStyle.css';
import DoctorLogin from '../../img/doctorLogin.png';
import PatientLogin from '../../img/patientLogin.png';
import {signUp,login} from '../../api/apiFunction';
import {connect} from 'react-redux';
import {setUser,setToken} from '../../action/index';
import { withRouter } from "react-router-dom";

import {
    Link, Redirect
} from "react-router-dom";


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showDoctorModal:false,
            showPatientModal:false,
            showCreateAccount:false,
            username:'',
            password:'',
            full_name:'',
            email:''
        }
    }

    onchangeUserName(username){
        console.log(username.target.value);
        this.setState({
            username:username.target.value,
        })
    };
    onChangePassword(password){
        console.log(password.target.value);
        this.setState({
            password:password.target.value,
        })
    };
    onChangeFullName(fullName){
        console.log(fullName.target.value);
        this.setState({
            full_name:fullName.target.value,
        })
    };
    onChangeEmail(email){
        console.log(email.target.value);
        this.setState({
            email:email.target.value,
        })
    };
    onclickCreatAccount(){
        this.setState({
            showCreateAccount:true
        })
    }
    onclickBackPatient(){
        this.setState({
            showCreateAccount:false
        })
    }
    render() {
        const {user,token}=this.props;
        // let history = useHistory();

        const doctorShow=()=>{
            this.setState({
                showDoctorModal:!this.state.showDoctorModal,
                showPatientModal:false,
                showCreateAccount:false,
            });
        }
        const patientShow=()=>{
            this.setState({
                showPatientModal:!this.state.showPatientModal,
                showDoctorModal:false,

            });
            this.onchangeUserName = this.onchangeUserName.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
            this.onclickCreatAccount = this.onclickCreatAccount.bind(this);
            this.onclickBackPatient = this.onclickBackPatient.bind(this);
            this.onChangeFullName = this.onChangeFullName.bind(this);
            this.onChangeEmail = this.onChangeFullName.bind(this);
        }

        //function for create the account
        const createAccount = async () =>{
console.log(this.state);
debugger
            const check =await signUp({username:this.state.username,password:this.state.password});
            console.log('hiii');
            console.log(check);
            if(check.data!=null){
                console.log('hii')

                console.log(check.data);
                createUserInfo(check.data);
                this.props.setUser(check.data);
                const dataLogin = await login({username:this.state.username,password:this.state.password,email:this.state.email,full_name:this.state.full_name});

                await this.props.setToken(dataLogin.data.token);
                if(dataLogin.data.token){
                    createTokenLocalStorage(dataLogin.data.token);
                    this.props.history.push("/searchDoctor");
                }
            }

        }
        //end for this funtion

        //funtion for sign in
        const signinAccount =async ()=>{

            const dataLogin = await login({username:this.state.username,password:this.state.password});
            console.log(dataLogin);
            await this.props.setToken(dataLogin.data.token);
            if(dataLogin.data.token){
                createTokenLocalStorage(dataLogin.data.token);

                this.props.history.push("/searchDoctor");
                console.log('hii')
            }
        };

        const createTokenLocalStorage =(token)=>{
            localStorage.removeItem('token');
            localStorage.setItem('token', JSON.stringify(token));
        }
        const createUserInfo =(user)=>{
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));

        }



        let showModal=null;
        //doctor modal
        const modaldoctor=
            <div className={this.state.showDoctorModal?'modalShow signin col-md-4':'modalHide signin col-md-4'}>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="email" className="form-control"  placeholder="User Name"/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  placeholder="Password"/>
                </div>
                <div className="form-group input-field">
                    <div className='container check-login-field'>
                        <i className="fas fa-user-md"></i>
                        <div className='row'>
                            <button className='col-md-6 btn-primary'>ساخت حساب</button>
                            <button className='col-md-6 btn-warning'>ورود</button>
                        </div>
                    </div>
                </div>

            </div>;

        //patient modal
        const modalPatient=
            <div className={this.state.showPatientModal?'modalShow signin col-md-4':'modalHide signin col-md-4'} >
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="email" className="form-control" placeholder="User Name" onChange={this.onchangeUserName} value={this.state.username}/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={this.onChangePassword} value={this.state.password} />
                </div>
                <div className="form-group input-field">
                    <div className='container check-login-field'>
                        <i className="fas fa-hospital-user"></i>
                        <div className='row'>
                            <button className='col-md-6 btn-primary' onClick={this.onclickCreatAccount}>ساخت حساب</button>
                            <button className='col-md-6 btn-warning' onClick={signinAccount}>ورود</button>
                        </div>
                    </div>
                </div>
            </div>;
        const modalPatientCreateAccount=
            <div className={this.state.showPatientModal?'modalShow signin col-md-4':'modalHide signin col-md-4'} >
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="email" className="form-control" placeholder="User Name" onChange={this.onchangeUserName} value={this.state.username}/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={this.onChangePassword} value={this.state.password} />
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">Full name</label>
                    <input type="email" className="form-control" placeholder="Full Name" onChange={this.onChangeFullName} value={this.state.full_name}/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">email</label>
                    <input type="email" className="form-control" placeholder="email" onChange={this.onChangeEmail} value={this.state.email}/>
                </div>
                <div className="form-group input-field">
                    <div className='container check-login-field'>
                        <i className="fas fa-hospital-user"></i>
                        <div className='row'>
                            <button className='col-md-6 btn-primary' onClick={createAccount}>ساختن </button>
                            <button className='col-md-6 btn-warning' onClick={this.onclickBackPatient}>بازگشت</button>
                        </div>
                    </div>
                </div>
            </div>;


        if(this.state.showDoctorModal){
            showModal = modaldoctor;
        }
        else if(this.state.showPatientModal){
            if(this.state.showCreateAccount)
            {
                showModal=modalPatientCreateAccount;
            }
            else {
                showModal = modalPatient;
            }
        }

        else {
            showModal=null;
        }


        return (
            <div className='container-login container'>
                <div className='row'>
                    <div className='col-md-6 login-field'>
                        <div className='container container-loginField'>
                            <img src={DoctorLogin} alt='doctorLogin'/>
                            <button onClick={doctorShow} className='btn btn-primary btn-lg doctodt-btn'>دکتر <i className="fas fa-user-nurse"></i></button>
                        </div>

                    </div>

                    <div className='col-md-6 login-field'>
                        <div className='container container-loginField'>
                            <img src={PatientLogin} alt='patientLogin'/>
                            <button onClick={patientShow} className='btn btn-warning btn-lg'>بیمار <i className="fas fa-user-injured"></i></button>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    {showModal}
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
export default connect(mapStateToProps , {setToken,setUser})(withRouter(LoginPage));

//todo:add user to redux after fetch data