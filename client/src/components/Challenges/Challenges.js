import React, { Component } from 'react';
import ChallengeForm from "./ChallengeForm";
import CurChallengesCard from "./CurChallengesCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AchievedChallengesCard from "./AcheivedChallengesCard";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteBtn from "./DeleteChalBtn";
import API from "../../utils/API";

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            newChallenge:
                {
                    sport: "Run",
                    type: "Distance",
                    qty: 1,
                    unit: "mi",
                    timeframe: "This Week",
                    challenger: ""
                }
        }
    }

    componentDidMount() {
        var getFriendsPromises = [];
        for(var i = 0; i < this.props.user.friends.length; i++) {
            console.log("Loading Friends List into State: ", this.props.user.friends[i]);
            getFriendsPromises.push(this.userNameLookup(this.props.user.friends[i]));
        }
        Promise.all(getFriendsPromises).then((values) => {
            console.log(values);
            console.log("got here");
            this.setState({
                friends: values
            });
        });
    };

    userNameLookup = (id) => {
        console.log("Friend ID Lookup: ", id);
        return API.getUser(id)
            .then(res => {
                console.log("Friend Name Lookup: ", res.data);
                return res.data;
            })
            .catch(err => console.log(err));
    };

    onChallengeChange = (event, uid) => {
        const { name, value } = event.target;

        switch (name) {
            case "challenger":
                this.setState(prevState => ({
                    newChallenge:
                    {
                        ...prevState.newChallenge,
                        challenger: value
                    }
                }))
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
            challenger: this.state.newChallenge.challenger.key
        };
        console.log("newChallengeObj: ", newChallenge, "Challenger: ", this.props.user._id, "Challenged: ", this.state.newChallenge.friend);
        API.saveChallenge(newChallenge, this.state.newChallenge.challenger)
            .then(() => this.loadChallenges())
            .catch(err => console.log(err));

    });

    onChallangeDelete = ((challengeID) => {
        API.deleteChallenge(this.props.user._id, challengeID)
            .then(res => this.loadChallenges())
            .catch(err => console.log(err));
    });


    render() {
        console.log("friends State: ", this.state.friends)
        return (
            <Container fluid className="pb-5">
                <Row>
                    <Col className="display-3 text-center py-5 component-title">
                        Challenges
                    </Col>
                </Row>
                <Row className="text-center py-5">
                    <Col md={4}>
                        <Card className="card-wide text-dark bg-light">
                            <ChallengeForm
                                user={this.props.user}
                                friends={this.state.friends}
                                onChallengeChange={this.onChallengeChange}
                                onChallengeSubmit={this.onChallengeSubmit}
                                newChallenge={this.state.newChallenge}
                            />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <CurChallengesCard>
                                    <ListGroup variant="flush">
                                        <Row className="mb-3 font-weight-bold">
                                            <Col sm={3} className="my-auto">
                                                Challenger
                                            </Col>
                                            <Col sm={6} className="my-auto">
                                                Challenge Name <br/>& Progress
                                            </Col>
                                        </Row>
                                        {this.props.user.challenges.map(challenge => {
                                            return (
                                                <ListGroup.Item key={challenge.id} className="bg-light">
                                                    <Row>
                                                        <Col sm={3}>
                                                            {challenge.challenger}
                                                        </Col>
                                                        <Col sm={6}>
                                                            {challenge.name}
                                                            <div className="progress-bar bg-success mt-2" style={{ width: challenge.challengeProgress }}> </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <DeleteBtn className="ml-5" 
                                                                onClick={() => this.onChallengeDelete(challenge.id)} 
                                                                btnname = "Decline" 
                                                            />
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </CurChallengesCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AchievedChallengesCard
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
