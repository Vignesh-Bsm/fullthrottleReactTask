
import React from'react'
import { withRouter } from 'react-router-dom';
import 'materialize-css';
import { Modal,Button} from 'react-materialize';
import { render } from 'react-dom';
import calendar from "./calender"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import Calender from './calender';
// import  { Redirect } from 'react-router-dom'

class  UserModel extends React.Component {

     constructor(props){
         super(props)
         this.isCalendar=false
         this.state={
             name:this.props.userdetails.real_name,
             location:this.props.userdetails.tz,
             activity:this.props.userdetails.activity_periods,
             isCalendar:false
             
         }
     }


     render(){
    const {activity}=this.state.activity
    return (
        <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Close</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="user"
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        trigger={<Button className="viewBtn" node="button">View Activity</Button>}
      >
        <p>
         <span><b>Name:</b></span>{this.state.name}
        </p>
        <p><span><b>Location:</b></span>{this.state.location}</p>
        <h5>Activities</h5>
        {this.state.activity.map((act,key)=>(
            <p>{key+1}.{act.start_time} to {act.end_time}</p>
            
        ))}
        
         <Calender activity={this.state.activity} />
      </Modal>
    )
}
}
export default withRouter(UserModel) 
