import React, { Component } from "react";
import { Header, Sidebar, BarProperties, Footer } from "../components/elements";
import { Container, Row, Col } from "reactstrap";
import { Upload, View } from './../components/upload';

export class Dashboard extends Component {
    // constructor(props) {
    //     super(props);

    // }

    dropResultsModal() {
        var modal = document.getElementById("results-modal");
            modal.style.display = "block";
    }
dropNotifications(){
    var notification_bar = document.getElementById("notifications-bar");
            notification_bar.style.display = "block";
}
liftNotifications(event){
    var notification_bar = document.getElementById("notifications-bar");
    if(event.target.className === "notification-bar"){

    }else if(event.target.className !== "notification-bar"){
        notification_bar.style.display = "none"
    }
}
    liftResultsModal(event){
        var modal = document.getElementById("results-modal");
        
        if(event.target.className === "search-results"){
            
        }else if(event.className !== "search-results"){
                      modal.style.display = "none";
        }
    }

    hub(event){
        this.liftResultsModal(event);
        this.liftNotifications(event);
    }
    render() {
        var sideCol = {
            padding: "0px",
            "background-color": "white",
            color: "grey"

        }

        return (
            <div className="dash-body" onClick={this.hub.bind(this)}>
                <Container fluid={true}>
                    <Row>
                        <Header activateResults={this.dropResultsModal} notificationBar={this.dropNotifications}/>
                        <div className="search-container" >
                            <span>

                                <div className="search-results" id="results-modal" tabIndex="1">

                                </div>
                            </span>
                        </div>
                        <div className="notification-bar" id="notifications-bar">

                        </div>
                    </Row>
                    <Row>
                        <Col md={2} style={sideCol}>
                            <Sidebar />
                        </Col>
                        <Col md={5}>
                            <Upload />
                            <br />
                            <View />
                        </Col>
                        <Col md={5}>

                        </Col>
                    </Row>
                </Container>
                
            </div>

        );
    }
}