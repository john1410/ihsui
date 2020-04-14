import React from "react";
import doctor from "../imagesTest/docotr.png";
import './profileStyle.css'
class SideProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          name:this.props.name,
            editName:false,

        };
        this.onChaneName =this.onChaneName.bind(this);
        this.onChaneOkBtn =this.onChaneOkBtn.bind(this);
    }
    onChaneName(newName){
        this.setState({
            name:newName.target.value,
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
            <button onClick={this.onChaneOkBtn}>تایید</button>
            </div>
        return (
            <div className='col-md-4' style={{margin: '15px 0'}}>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={doctor} alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <div className='container container-info-profile column-shape'>
                            <label>نام کاربری</label>
                            <div className='row'>   <i className="fa fa-edit" onClick={()=>{
                                this.setState({
                                    editName:!this.state.editName
                                })
                            }}>
                            </i>
                                {this.state.editName?
                                        showEditableInput
                                    :this.state.name}</div>


                        </div>
                        </li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default SideProfile;