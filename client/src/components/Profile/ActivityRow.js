import React from "react";
import { Row, Col, Button } from "react-bootstrap"
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";



function ActivityRow(props) {
    //calc for image and color switch based on sport
    let image;
    let color;
    switch (props.sport) {
        case "Swim":
            image = Swim;
            color = "blue"
            break;
        case "Ride":
            image = Bike;
            color = "green"
            break;
        case "Run":
            image = Run;
            color = "red"
            break;
        default:
            console.log("image not defined")
    }

    //uses above calc for conditional styling
    const Style = {
        cardBody: {
            color: "black",
            padding: "5px",
        },
        card: {
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10px"
        },
        image: {
            width: "30%"
        },
        col: {
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center"
        },
        h5: {
            fontWeight: "700"
        },
        button: {
            position: "relative",
            bottom: "5px",
            left: "5px",
            // padding: "15px 20px"
            // width: "40%"
        },
        title: {
            color: color
        }
    }

    //average speed calc
    let avgSpeed = (props.distance / (parseInt(props.duration))) * 60;

    //date calc
    let convertTimetoDate = (time) => {
        let date = new Date(time);
        date = date.toDateString().slice(4)
        return date;
    }
    return (
        <div style={Style.card} key={props.id}>
            <div style={Style.cardBody}>
                <Row>
                    <Col sm={3} style={Style.col}>
                        <img className="img-fluid" style={Style.image} src={image} alt='sports' />
                    </Col>
                    <Col style={Style.col} sm={6}>
                        <h5 style={Style.h5}>Distance: {props.distance} {props.units}</h5>
                        <h6>Duration: {props.duration} min</h6>
                        <h6>Average Speed: {avgSpeed.toFixed(2)} {props.units}/hr</h6>
                        <h6 style={Style.h5}>{convertTimetoDate(props.timestamp)}</h6>
                    </Col>
                    <Col style={Style.col} sm={3}>
                        <Button variant="danger" onClick={() => { props.delete(props.id) }} style={Style.button}>X</Button>
                    </Col>
                </Row>
            </div>
            <hr></hr>
        </div>
    )
}

export default ActivityRow;