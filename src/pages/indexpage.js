import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Header } from "../components/elements";
import { Login, Register } from "../components/authentication";
import { Container, Row, Col } from "reactstrap";

export class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: null,
            loggedin:"false"
        };
        // this.login = this.login.bind(this);
    }

    login(event, props) {
        event.preventDefault();
        console.log("Email: ", event.target.username.value);
        console.log("Password: ", event.target.password.value);
            props.onLoginActive();
        
    }

    showLogin() {
        this.setState(() => ({ currentView: <Login onsubmit={(event) => this.login(event, this.props)} /> }));
    }
    showRegister() {
        this.setState({ currentView: <Register /> });
    }
    componentDidMount() {
        this.showLogin();
      
    }
    // login(){

    // }
    register() {

    }
    render() {
        
        return (
            <div id="body-rep">
                <Container fluid={true}>
                    
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
                </Container>

            </div>
        );
    }
}
