import React from "react";
import CardDoctor from "./doctorCard";

class LsitCardDoctor extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:[<CardDoctor title='reza' name='rexza' text='hi'/>]
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.value !== props.value) {
            // return {
            //     value: props.value,
            //     computed_prop: heavy_computation(props.value)
            // }
            const {datas}=this.props;
            console.log('hiii',datas);
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            const newPost=[];
            console.log(this.props);
            this.props.datas.forEach((itm)=>{
                            console.log(itm);
                    newPost.push(<CardDoctor title={itm.title}/>)
                        });
            this.setState({
                items:newPost
            })
        }
    }

    render() {
    //     const array=[]
    //     const ListCard = ()=>{
    //        datas.forEach((itm)=>{
    //             console.log(itm);
    //             this.setState({
    //                 items:[this.state.items,(<CardDoctor title={itm.title}/>)]
    //             })
    //         });
    //
    //     }
    // console.log('hi',datas);
        return(
            <div className='row'>
                {this.state.items}
            </div>
        );
    }
    }


export default LsitCardDoctor;