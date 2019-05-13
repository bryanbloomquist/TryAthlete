import React from "react";
import GoalForm from "./GoalForm";
import CurGoalsCard from "./CurGoalsCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AchievedGoalsCard from "./AcheivedGoalsCard";



function Goals(props) {
    console.log(props);
    var fname = props.user.givenName.charAt(0).toUpperCase() + props.user.givenName.slice(1);

    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5">
                    Goals for {fname}
                </Col>
            </Row>
            <Row className="text-center py-5">
                <Col md={4}>
                    <GoalForm 
                    user={props.user}
                    />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <CurGoalsCard
                                userGoals={props.user.goals}
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
