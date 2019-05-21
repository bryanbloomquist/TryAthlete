import React, { Component } from 'react';
import ChallengeForm from "./ChallengeForm";
import CurChallengesCard from "./CurChallengesCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AchievedChallengesCard from "./AchievedChallengesCard";
import LifetimeAchievedChallengesCard from "./LifetimeAchievedChallengesCard";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteChalBtn from "./DeleteChalBtn";
import API from "../../utils/API";

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newChallenge:
            {
                sport: "Run",
                type: "Distance",
                qty: 1,
                unit: "mi",
                timeframe: "This Week",
                fChallenged: ""
            }
        }
    }


    onChallengeChange = (event) => {
        const { name, value } = event.target;
        
        switch (name) {
            case "fChallenged":
                console.log("fChallenged Event: ", event);
                console.log("fChallenged Value: ", value);
                API.getUser(value)
                    .then(res => {
                        console.log(res);
                        this.setState(prevState => ({
                            newChallenge:
                            {
                                ...prevState.newChallenge,
                                fChallenged:
                                    {
                                        id: res.data._id,
                                        givenName: res.data.givenName,
                                        familyName: res.data.familyName,
                                        imageUrl: res.data.imageUrl,
                                        email: res.data.email
                                    }
                            }
                        }))
                    })

                break;

            case "sport":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        sport: value
                    }
                }))
                break;

            case "type":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        type: value
                    }
                }))
                break;

            case "qty":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        qty: value
                    }
                }))
                break;

            case "unit":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        unit: value
                    }
                }))
                break;

            case "timeframe":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        timeframe: value
                    }
                }))
                break;

            default:
                console.log("No Challenge Field Change Match...");
        }
    }

    onChallengeSubmit = (() => {
        console.log("ChallengeSubmit clicked: ", this.props.user._id);

        let newChallenge = {
            name: this.state.newChallenge.sport + " " + this.state.newChallenge.qty + " " + this.state.newChallenge.unit + " " + this.state.newChallenge.timeframe,
            sport: this.state.newChallenge.sport,
            isAchieved: false,
            challengeType: this.state.newChallenge.type,
            challengeQty: this.state.newChallenge.qty,
            challengeUnit: this.state.newChallenge.unit,
            challengeTimeFrame: this.state.newChallenge.timeframe,
            challengeProgress: "10%",
            challenger:
            {
                id: this.props.user._id,
                givenName: this.props.user.givenName,
                familyName: this.props.user.familyName,
                imageUrl: this.props.user.imageUrl,
                email: this.props.user.email
            }
        };

        console.log("newChallengeObj: ", newChallenge, "Challenger: ", this.props.user._id, "Challenged: ", this.state.newChallenge.friend);

        API.saveChallenge(newChallenge, this.state.newChallenge.fChallenged.id)
            .then(() => this.loadChallenges())
            .catch(err => console.log(err));
    })

    onChallangeDelete = ((challengeID) => {
        API.deleteChallenge(this.props.user._id, challengeID)
            .then(res => this.loadChallenges())
            .catch(err => console.log(err));
    });


    render(props) { 
        console.log("friends State: ", this.state.friends)
        return (
            <Container fluid className="pb-5">
                <Row>
                    <Col className="display-3 text-center py-5 component-title">
                        Challenges
                    </Col>
                </Row>
                <Row className="text-center py-5">
                    <Col md={4} className = "mb-4">
                        <Card className="card-wide text-dark bg-light">
                            <ChallengeForm
                                user={this.props.user}
                                friends={this.props.friends}
                                onChallengeChange={this.onChallengeChange}
                                onChallengeSubmit={this.onChallengeSubmit}
                                newChallenge={this.state.newChallenge}
                            />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col className = "mb-4">
                                <CurChallengesCard>
                                    <ListGroup variant="flush">
                                        <Row className="mb-3 font-weight-bold">
                                            <Col className="my-auto">
                                                Challenger
                                            </Col>
                                            <Col className="my-auto">
                                                Challenge Name <br />& Progress
                                            </Col>
                                        </Row>
                                        {this.props.user.challenges.map(challenge => {
                                            // if (challenge.isAchieved) {
                                                return (
                                                    <ListGroup.Item key={challenge.id} className="bg-light">
                                                        <Row>
                                                            <Col sm={3}>
                                                                <Row>
                                                                    <Col sm={12}>
                                                                        <img src={challenge.challenger.imageUrl} className="challenge-avatars" alt={challenge.challenger.email}></img>
                                                                    </Col>
                                                                    <Col sm={12}>
                                                                        {challenge.challenger.givenName} {challenge.challenger.familyName}
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col sm={6}>
                                                                {challenge.name}
                                                                <div className="progress-bar bg-success mt-2" style={{ width: challenge.challengeProgress }}> </div>
                                                            </Col>
                                                            <Col sm={3}>
                                                                <DeleteChalBtn className="ml-5"
                                                                    onClick={() => this.onChallengeDelete(challenge.id)}
                                                                    btnname="Decline"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                );
                                            // }
                                        })}
                                    </ListGroup>
                                </CurChallengesCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col className = "mb-4">
                                <AchievedChallengesCard>
                                    <ListGroup variant="flush">
                                        <Row className="mb-3 font-weight-bold">
                                            <Col className="my-auto">
                                                Challenger
                                            </Col>
                                            <Col className="my-auto">
                                                Challenge Name <br />& Progress
                                            </Col>
                                        </Row>
                                        {this.props.user.challenges.map(challenge => {
                                            return (
                                                <ListGroup.Item key={challenge.id} className="bg-light">
                                                    <Row>
                                                        <Col sm={3}>
                                                            <Row>
                                                                <Col sm={12}>
                                                                <img src={challenge.challenger.imageUrl} className="challenge-avatars" alt={challenge.challenger.email}></img>
                                                                </Col>
                                                                <Col sm={12}>
                                                                {challenge.challenger.givenName} {challenge.challenger.familyName}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col sm={6}>
                                                            {challenge.name}
                                                            <div className="progress-bar bg-success mt-2" style={{ width: challenge.challengeProgress }}> </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <DeleteChalBtn className="ml-5"
                                                                onClick={() => this.onChallengeDelete(challenge.id)}
                                                                btnname="Decline"
                                                            />
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </AchievedChallengesCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LifetimeAchievedChallengesCard
                                    userChallenges={this.props.user.challenges}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Challenges;
