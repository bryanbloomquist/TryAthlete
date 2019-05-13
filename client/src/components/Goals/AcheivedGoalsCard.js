import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";




function AchievedGoalsCard(props) {
    console.log(props)
    return (
        <Card className="card-wide text-dark bg-light">
            <Card.Title>Lifetime Acheivements</Card.Title>
            <Card.Body className="h5">
                <Row className="mb-2">
                    <Col md={2}>
                        Run
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-success rounded" style={{ width: "80%" }}>80%</div>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col md={2}>
                        Bike
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-primary rounded" style={{ width: "60%" }}>60%</div>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col md={2}>
                        Swim
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-danger rounded" style={{ width: "20%" }}>20%</div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    );
}

export default AchievedGoalsCard;