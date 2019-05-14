import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

function CurGoalsCard(props) {
    console.log("CurGoalsCard", props);
// If implementing "progress" then change progress bar background appropriate
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
                        <Button variant="danger" onClick={() => API.deleteGoal(props.userID, props.goalID )}>Delete</Button>
                    </Col>
                </Row>
                <div className="progress-bar bg-success" style={{ width: props.progress }}> </div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default CurGoalsCard;