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
            // user:
            // {
            //     challenges: []

            // },
            friends: [],
            newChallenge:
            {
                sport: "Run",
                type: "Distance",
                qty: 1,
                unit: "mi",
                timeframe: "This Week",
                friend: ""
            }
        }
    }

    componentDidMount() {
        // this.loadChallenges();
        this.props.user.friends.forEach(friend => {
            console.log("Loading Friends List into State: ", friend)
            this.userNameLookup(friend);
        });
    };

    componentWillMount() {
        this._isMounted = false;

    }
    // loadChallenges = () => {
    //     API.getUser(this.props.user._id)
    //         .then(res =>
    //             this.setState({
    //                 user:
    //                 {
    //                     challenges: res.data.challenges,
    //                 }
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };

    userNameLookup = (id) => {
        console.log("Friend ID Lookup: ", id);
        API.getUser(id)
            .then(res => {
                console.log("Friend Name Lookup: ", res.data);
                this.setState(
                    {
                        friends: this.state.friends.concat({
                            id: res.data._id,
                            fname: res.data.givenName,
                            lname: res.data.familyName
                        })
                    }
                )
            })
            .catch(err => console.log(err));
    };

    onChallengeChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
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

    onchallengesubmit = (() => {

        console.log("ChallengeSubmit clicked: ", this.props.user._id);

        let d = new Date();
        let timestamp = d.getFullYear() + d.getMonth() + d.getDay() + d.getTime();

        let newChallenge = {
            id: timestamp,
            name: this.state.newChallenge.sport + " " + this.state.newChallenge.qty + " " + this.state.newChallenge.unit + " " + this.state.newChallenge.timeframe,
            sport: this.state.newChallenge.sport,
            isAchieved: false,
            challengeType: this.state.newChallenge.type,
            challengeQty: this.state.newChallenge.qty,
            challengeUnit: this.state.newChallenge.unit,
            challengeTimeFrame: this.state.newChallenge.timeframe,
            challengeProgress: "10%",
            challenger: this.props.user._id
        };
        console.log("newChallengeObj: ", newChallenge, "Challenger: ", this.props.user._id, "Challenged: ", this.state.newChallenge.friend);
        API.saveChallenge(newChallenge, this.state.newChallenge.friend)
            .then(res => this.loadChallenges())
            .catch(err => console.log(err));

    });

    onChallangeDelete = ((challengeID) => {
        API.deleteChallenge(this.props.user._id, challengeID)
            .then(res => this.loadChallenges())
            .catch(err => console.log(err));
    });


    render() {
        let fname = this.props.user.givenName.charAt(0).toUpperCase() + this.props.user.givenName.slice(1);
        console.log("friends State: ", this.state.friends)
        return (
            <Container fluid className="pb-5">
                <Row>
                    <Col className="display-3 text-center py-5 component-title">
                        Challenges for {fname}
                    </Col>
                </Row>
                <Row className="text-center py-5">
                    <Col md={4}>
                        <Card className="card-wide text-dark bg-light">
                            <ChallengeForm
                                user={this.props.user}
                                friends={this.state.friends}
                                onChallengeChange={this.onChallengeChange}
                                onchallengesubmit={this.onChallengeSubmit}
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
                                                            <DeleteBtn className="ml-5" onClick={() => this.onChallengeDelete(challenge.id)} btnName="Decline" />
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
