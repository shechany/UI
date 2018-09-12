import React, { Component } from "react";
import { Header, Sidebar,BarProperties } from "../components/elements";
import { Container, Row, Col } from "reactstrap";
import { Upload, View } from './../components/upload';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
      
    }

dropResultsBar(){
// var box = document.getElementById("results-modal");
// box.style.display = "none";
alert("hey there");
}
componentDidMount(){
<Header activateResults="cheeeee"/>
}

    render() {
        var sideCol = {
            padding: "0px",
            "background-color": "white",
            color: "grey"

        }

        return (
            <div className="dash-body">
                <Container fluid={true}>
                    <Row>
                        <Header/>
                        <div className="search-container">
    <span>
 
    <div className="search-results" id="results-modal" tabIndex="1">
            
</div>
    </span>
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