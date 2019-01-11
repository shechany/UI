import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { FrontBar,Footer } from "../components/elements";
import { Login, Register } from "../components/authentication";
import { Container, Row, Col } from "reactstrap";
import register from './../registerServiceWorker';
import { postData } from './../services/request';

export class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: null,
            loggedin:"false",
            firstname:"",
            middlename:"",
            lastname:"",
            email:"",
            username:"",
            password:"",
            v_password:""
        };
        // this.login = this.login.bind(this);
    }

    login(event, props) {
        event.preventDefault();
        console.log("Email: ", event.target.username.value);
        console.log("Password: ", event.target.password.value);
           
        props.onLoginActive();
    }
    registerChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]:[event.target.value]});
    }
    register(event){
        event.preventDefault();
        var regData = {
            firstame: this.state.username,
            middlename : this. state.middlename,
            lastname: this.state.lastname,
            username: this.state.username,
            email:this.state.email,
            password: this.state.password,
            v_password: this.state.v_password
        }
        var response = postData("/regiser",regData);
                console.log(response);
    }
    showLogin() {
        this.setState(() => ({ currentView: <Login onsubmit={(event) => this.login(event, this.props)} /> }));
    }
    showRegister() {
        this.setState({ currentView: <Register onsubmitReg={(event) => this.registerChange(event)} submitReg={(event) => this.register(event)}/> });
    }
    componentDidMount() {
        this.showLogin();
      
    }
    // login(){

    // }
   
    render() {
        
        return (
            <div id="body-rep">
                <Container fluid={true}>
                        <FrontBar/>
                    <Row>
                        <Col md={9}>
                        </Col>
                        <Col md={3}>
                            {this.state.currentView}
                            <br />
                            <span className="auth_toggle" onClick={this.showLogin.bind(this)}>Login</span> | <span onClick={this.showRegister.bind(this)} className="auth_toggle">Register</span>
                            <br /><br />
                            {/* <p>{this.props.loginVals.username}</p> */}
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col md={12}>
                        
                        
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}
