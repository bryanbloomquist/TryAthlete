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

    let avgSpeed = (props.distance_unit/(props.time/60))

    return (
        <div style={style.card} key={props.id}>
            <div style={style.cardBody}>
                <Row>
                    <Col sm={2} style={style.col}>
                        <div style={style.title}>{props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}</div>
                        <img className="img-fluid" style={style.image} src={image} alt='sports' />
                    </Col>
                    <Col style={style.col} sm={8}>
                       <h4 style={style.h5}>{props.distance_unit.toFixed(2)} {props.distance_measurement}</h4>
                       <h5>Time: {props.time} Minutes</h5>
                       <h5>Average Speed: {avgSpeed.toFixed(2)} {props.distance_measurement}/hr</h5>
                    </Col>
                    <Col style={style.col} sm={2}>
                       <Button variant="danger" onClick={() => { props.delete(props.id) }}  style={style.button}>X</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}



export default ActivityRow;