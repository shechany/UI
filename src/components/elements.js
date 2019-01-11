import React, { Component } from "react";
import { Navbar, NavbarToggler, NavbarBrand, Collapse } from "reactstrap";
import { ReactDOM } from 'react-dom';


var like = require( "../assets/icons/like.png");
var live = require("../assets/icons/live.png");
var trending = require("../assets/icons/trending.png");
var help = require("../assets/icons/help.png");
var home = require("../assets/icons/home.png");
var feedback = require("../assets/icons/feedback.png");
var notification = require("../assets/icons/notification.png");
var settings = require("../assets/icons/settings.png");
var friend = require("../assets/icons/friend.png");


export class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loggedin:null
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
// componentDidMount(){
//     alert(this.props.dropNotifications.bind(this));
// }
    render() {
        return (
            <div>
               
                <Navbar light expand="md" className="header fixed-top">
                    <NavbarBrand href="/">Info</NavbarBrand>
                    <BarProperties call={this.props.activateResults} note={this.props.notificationBar}/>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    </Collapse>
                
                </Navbar>
                <div className="has-fixed-nav"></div>
            </div>
        );
    }
}

export class Sidebar extends Component {
   
    render(){
        return(
                <div className="side-bar">
                <br/>
                        <div className="side-options"><img src={home} alt=""/> <label className="label">Home</label></div>
                        <div className="side-options"><img src={trending} alt=""/> <label className="label">Trending</label></div>
                        <div className="side-options"><img src={like} alt=""/> <label className="label">Liked</label></div>
                        <div className="side-options"><img src={live} alt=""/> <label className="label">Live</label></div>
                        <div className="side-options"><img src={help} alt=""/> <label className="label">Help</label></div>
                        <div className="side-options"><img src={feedback} alt=""/> <label className="label">Send feedback</label></div>
                </div>
        );
    }
}

export class BarProperties extends Component{
constructor(props){
    super(props)
}


    render(){
        return(
<div>
    <div>
    <div className="search-container">
    <span>
    <input type="text" class="form-control search-bar" id="search-input" placeholder="Search for..." aria-label="Search for..." onKeyUp={this.props.call.bind(this)}/>
    {/* <div className="search-results" id="results-modal" tabIndex="1">
</div> */}
    </span>
    </div>
    <span className="dash-icons">
    <img src={friend} alt=""/>
          <img src={notification} alt="" onMouseOver={this.props.note.bind(this)}/>
          <img src={settings} alt=""/>
    </span>
    
    </div>
</div>
        ); 
       }
}
 export class FrontBar extends Component{
     constructor(props){
         super(props)
     }

     render(){
         return(
             <div className="front-bar fixed-top">
                       
             </div>
         )
     }
 }

 export class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">

            </div>
        )
    }
 }