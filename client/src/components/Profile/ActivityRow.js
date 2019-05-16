import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap"
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";





function ActivityRow(props) {

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

    let style = {
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
            width: "90%"
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
            padding: "15px 20px"
            // width: "40%"
        },
        title: {
            color: color
        }
    }

    //let avgSpeed = (props.distance / (props.time / 60))

    console.log(props)
    return (
        <div style={style.card} key={props.id}>
            <div style={style.cardBody}>
                <Row>
                    <Col sm={3} style={style.col}>
                        <div style={style.title}>{props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}</div>
                        <img className="img-fluid" style={style.image} src={image} alt='sports' />
                    </Col>
                    <Col style={style.col} sm={6}>
                        <h5 style={style.h5}>Distance: {props.distance} {props.units}</h5>
                        {/* <h6>Date: {props.time} </h6> */}
                        {/* <h6>Average Speed: {avgSpeed.toFixed(2)} {props.units}/hr</h6> */}
                    </Col>
                    <Col style={style.col} sm={3}>
                        <Button variant="danger" onClick={() => { props.delete(props.id) }} style={style.button}>X</Button>
                    </Col>
                </Row>
            </div>
            <hr></hr>
        </div>
    )
}



export default ActivityRow;