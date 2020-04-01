import React from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


class Calender extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activity:this.props.activity
        }
        this.calConvValues =[]
        this.eventVal=[]
    }

    
    render(){
          let activity= this.state.activity
          let startArr=[]
          //getting the start time for creating events in the calendar
            for(let i=0;i<=activity.length-1;i++){
                 let tempVal=activity[i]
                  startArr.push(tempVal.start_time)
            }
        
        //  for (const timeval of startArr) {
              
        //    console.log( this.calConvValues.push(new Date(timeval.split(" ").splice(0,3).join(" "))),"333333")         
        //  }
        
         
        var uniqEventVal = [...new Set(this.calConvValues)];
            for(let i=0;i<=activity.length-1;i++){
                this.eventVal.push({title: `${"Events "+(i+1)}`, start: uniqEventVal[i]})
            }
          for (const iterator of uniqEventVal) {

              
          }
          this.eventVal.push({title:"Current Date", start:new Date()})
        
        return(
           
              <FullCalendar
              defaultView="dayGridDay"
              duration={{ days: 1 }}
              defaultDate={new Date()}
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth',
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref={this.calendarComponentRef}
              weekends={true}
              events={this.eventVal}
            />
        )
    }
}





export default Calender