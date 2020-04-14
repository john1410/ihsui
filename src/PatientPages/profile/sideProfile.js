import React from "react";
import doctor from "../imagesTest/docotr.png";
import './profileStyle.css'
class SideProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          name:this.props.name?this.props.name:JSON.parse(localStorage.getItem('user')).username,
            email:this.props.email?this.props.email:'',
            fullName:this.props.fullname?this.props.fullname:'',
            edit:false,

        };
        this.onChaneName =this.onChaneName.bind(this);
        this.onChangeFullName =this.onChangeFullName.bind(this);
        this.onChangeEmail =this.onChangeEmail.bind(this);
        this.onChaneOkBtn =this.onChaneOkBtn.bind(this);
    }
    onChaneName(newName){
        this.setState({
            name:newName.target.value,
        })
    }
    onChangeFullName(newName){
        this.setState({
            fullName:newName.target.value,
        })
    }
    onChangeEmail(email){
        this.setState({
            email:email.target.value,
        })
    }
    onChaneOkBtn(){
this.setState({
    editName:!this.state.editName,
})
    }

    render() {
        // console.log('rr',props)
        const {title, text, name} = this.props;
        const showEditableInput =
            <div className='column-shape'>
            <input value={this.state.name} onChange={this.onChaneName}/>
            </div>;
        const showEmailInpiu =
            <div className='column-shape'>
                <input value={this.state.email} onChange={this.onChaneName}/>
            </div>;
        const showFullNameInput =
            <div className='column-shape'>
                <input value={this.state.email} onChange={this.onChangeEmail}/>
            </div>;

        const showsubmitBtn =
            <button onClick={this.onChaneOkBtn} style={{width:'80%'}}>تایید</button>;

        return (
            <div className='col-md-4' style={{margin: '15px 0'}}>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={doctor} alt={name}/>
                    <i className="fa fa-edit" onClick={()=>{
                        this.setState({
                            editName:!this.state.editName
                        })
                    }}>
                    </i>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <div className='container container-info-profile column-shape'>
                            <label>نام کاربری</label>
                            <div className='row'>
                                {this.state.editName?
                                        showEditableInput
                                    :this.state.name}</div>
                        </div>
                        </li>
                        <li className="list-group-item user-name">
                            <div className='container container-info-profile column-shape'>
                                <label>نام و نام خانوداگی</label>
                                <div className='row'>
                                    {this.state.editName?
                                        showFullNameInput
                                        :this.state.fullName}</div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className='container container-info-profile column-shape'>
                                <label>ایمیل</label>
                                <div className='row'>
                                    {this.state.editName?
                                        showEmailInpiu
                                        :this.state.email}</div>
                            </div>
                        </li>
                    </ul>
                    <div className="card-body align-content-sm-stretch">
                        {/*<a href="#" className="card-link">Card link</a>*/}
                        {/*<a href="#" className="card-link">Another link</a>*/}
                        {this.state.editName?showsubmitBtn:null}
                    </div>
                </div>
            </div>

        )
    }
}

export default SideProfile;