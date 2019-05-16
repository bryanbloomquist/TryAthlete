import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap"
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";





function ActivityRow(props) {
    let style = {
        cardBody: {
            color: "black",
            padding: "5px"

        },
        card: {
            width: "100%",
            padding: "15px"
        },
        image: {
            width: "80%"
        },
        col: {
            marginTop: "auto",
            marginBottom: "auto"
        },
        h5: {
            fontWeight: "700"
        },
        button: {
            position: "relative",
            bottom: "5px",
            left: "5px"
        }
    }
    let image;
    switch (props.sport) {
        case "swim":
            image = Swim;
            break;
        case "bike":
            image = Bike;
            break;
        case "run":
            image = Run;
            break;
        default:
            console.log("image not defined")
    }

    let avgSpeed = (props.distance_unit/(props.time/60)).toFixed(2)

    return (
        <Card style={style.card} key={props.id}>
            <Card.Body style={style.cardBody}>
                <Row>
                    <Col sm={3} style={style.col}>
                        <Card.Title>{props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}</Card.Title>
                        <img className="img-fluid" style={style.image} src={image} alt='sports' />
                    </Col>
                    <Col style={style.col} sm={7}>
                       <h5 stlye={style.h5}>{props.distance_unit} {props.distance_measurement}</h5>
                       <h6>Time: {props.time}</h6>
                       <h6>Average Speed: {avgSpeed} {props.distance_measurement}/hr</h6>
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