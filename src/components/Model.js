
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

    viewCalendar(activity){
        alert("hhhhiii")
        return <Calender/>
    //     let path = `/calendar`;
    // this.props.history.push(path+activity );
        // console.log("hiiii",this.isCalendar)
       
        // console.log("after",this.isCalendar)
        // this.setState({
        //     isCalendar:true
        // })
    }

     render(){
    console.log(this.state.activity,"22222")
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
        {/* <i onCLick={()=>this.viewCalendar}class="material-icons circle">user</i> */}
      
        {/* <p onClick={()=>this.viewCalendar()}>Click</p> */}
        {/* <button onClick={(activity)=>this.viewCalendar(activity)}>View Activities</button> */}
       
       {/* <div className={this.state.isCalendar?"btntrue":"btnfalse"}> <FullCalendar
        disabled="false"
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          /></div> */}
         <Calender activity={this.state.activity} />
        {/* {this.state.isCalendar?
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
       :null} */}
      </Modal>
    )
}
}
export default withRouter(UserModel) 
