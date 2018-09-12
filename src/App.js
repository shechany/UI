import React, { Component } from 'react';
import './App.css';
import { Indexpage } from './pages/indexpage';
import { Dashboard } from './pages/dashboard';

class App extends Component {
  constructor(props){
super(props);
this.state ={
  currentPage:null
}
this.loginSubmit = this.loginSubmit.bind(this);
this.registrationSubmit = this.registrationSubmit.bind(this);
  }

  loginSubmit(){
    this.setState({currentPage:<Dashboard/>});
  }
  registrationSubmit(){
    this.setState(() => ({ currentPage: <Dashboard/> }));
  }

  componentDidMount(){
    this.setState({currentPage:<Indexpage onLoginActive={this.loginSubmit} showSearch={false}/>});
  }
  render() {
    return (
      <div className="App">
        {this.state.currentPage}
        {/* <h1>{console.log(this.props.loginvals)}</h1> */}
      </div>
    );
  }
}

export default App;
