import React from "react";
import GoalForm from "./GoalForm";
import CurGoalsCard from "./CurGoalsCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AchievedGoalsCard from "./AcheivedGoalsCard";


function Goals(props) {
    var fname = props.user.givenName.charAt(0).toUpperCase() + props.user.givenName.slice(1);

    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5 goal-title">
                    Goals for {fname}
                </Col>
            </Row>
            <Row className="text-center py-5">
                <Col md={4}>
                    <Card className="card-wide text-dark bg-light">
                        <GoalForm 
                        user={props.user}
                        onGoalChange={props.onGoalChange}
                        onGoalSubmit={props.onGoalSubmit}
                        curGoal={props.curGoal}
                        />
                    </Card>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <CurGoalsCard
                                user = {props.user}
                                goals = {props.user.goals}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AchievedGoalsCard
                                userGoals={props.user.goals}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Goals;
