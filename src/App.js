import React from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Navbar'
import UserModel from './components/Model'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userList:[]
    }
  }
 componentDidMount(){
   let url ='http://localhost:3001/members'
   axios.get(url).then((res)=>{
    this.setState({
      userList:res.data
    })
   })
 }
 viewActivity=(user)=>{
    
     console.log(user)
    
 }
  render(){
  return (
    <div className="App">
      <Nav/>
     <h1>userList</h1>
     <div className="row">  
      <div className="col l6 offset-l3">  
       <ul className="collection">
      {this.state.userList.map((user,key)=><li key={key} class="collection-item avatar">
      
      
      <i class="material-icons circle">user</i>
      <span class="title">{user.real_name}</span>
      {/* <p>First Line <br/>
         Second Line
      </p> */}
      <UserModel userdetails={user}/>
      {/* <a onClick={()=>this.viewActivity(user)}class="secondary-content"><i  class="material-icons">send</i></a> */}
       
      
      </li>)}
      </ul>
      </div>   
      </div>

    </div>
  );
  }
}

export default App;
