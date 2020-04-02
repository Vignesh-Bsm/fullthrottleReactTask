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

  render(){
  return (
    <div className="App">
      <Nav/>
     <h3>User Activity List</h3>
     <div className="row">  
      <div className="col l6 offset-l3">  
       <ul className="collection">
      {this.state.userList.map((user,key)=><li key={key} class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">{user.real_name}</span>
      <span class="title">({user.id})</span>

      <UserModel userdetails={user}/>
      </li>)}
      </ul>
      </div>   
      </div>

    </div>
  );
  }
}

export default App;
