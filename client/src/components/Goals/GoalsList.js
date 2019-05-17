import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



function CurGoalsCard(props) {
    console.log("GoalsList - UserID: ", props.userID);
    console.log("GoalsList - GoalID: ", props.goalID);
    return (
        <ListGroup variant="flush">
            <ListGroup.Item  className="bg-light flex inline-block">
                <Row>
                    <Col sm={9}>
                        {props.name}
                    </Col>
                    <Col sm={3}>
                        <Button type="submit" role="button" variant="danger" onClick={() => props.onGoalDelete(props.userID, props.goalID)}>Delete</Button>
                    </Col>
                </Row>
                <div className="progress-bar bg-success" style={{ width: props.goalProgress }}> </div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default CurGoalsCard;