import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap"
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";





function ActivityRow(props) {
    
    let image;
    let color;
    switch (props.sport) {
        case "swim":
            image = Swim;
            color = "blue"
            break;
        case "bike":
            image = Bike;
            color = "green"
            break;
        case "run":
            image = Run;
            color = "red"
            break;
        default:
            console.log("image not defined")
    }

    let style = {
        cardBody: {
            color: "black",
            padding: "5px"

        },
        card: {
            width: "100%",
            padding: "10px"
        },
        image: {
            width: "70%"
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

    let avgSpeed = (props.distance_unit/(props.time/60))

    return (
        <Card style={style.card} key={props.id}>
            <Card.Body style={style.cardBody}>
                <Row>
                    <Col sm={3} style={style.col}>
                        <Card.Title style={style.title}>{props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}</Card.Title>
                        <img className="img-fluid" style={style.image} src={image} alt='sports' />
                    </Col>
                    <Col style={style.col} sm={7}>
                       <h5 stlye={style.h5}>{props.distance_unit.toFixed(2)} {props.distance_measurement}</h5>
                       <h6>Time: {props.time} Minutes</h6>
                       <h6>Average Speed: {avgSpeed.toFixed(2)} {props.distance_measurement}/hr</h6>
                    </Col>
                    <Col style={style.col} sm={1}>
                       <Button variant="danger" onClick={() => { props.delete(props.id) }}  style={style.button}>X</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}



export default ActivityRow;