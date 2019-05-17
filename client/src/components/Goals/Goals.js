import React, { Component } from 'react';
import GoalForm from "./GoalForm";
import CurGoalsCard from "./CurGoalsCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AchievedGoalsCard from "./AcheivedGoalsCard";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteBtn from "./DeleteBtn";
import API from "../../utils/API";

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:
            {
                goals: []
            },
            newGoal:
            {
                sport: "Run",
                type: "Distance",
                qty: 1,
                unit: "mi",
                timeframe: "This Week"
            }
        }
    }

    componentDidMount() {
        this.loadGoals();
    };

    loadGoals = () => {
        API.getUser(this.props.user._id)
            .then(res =>
                this.setState({
                    user: { goals: res.data.goals }
                })
            )
            .catch(err => console.log(err));
    };

    onGoalChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "sport":
                this.setState(prevState => ({
                    newGoal:
                    {
                        ...prevState.newGoal,
                        sport: value
                    }
                }))
                break;

            case "type":
                this.setState(prevState => ({
                    newGoal:
                    {
                        ...prevState.newGoal,
                        type: value
                    }
                }))
                break;

            case "qty":
                this.setState(prevState => ({
                    newGoal:
                    {
                        ...prevState.newGoal,
                        qty: value
                    }
                }))
                break;

            case "unit":
                this.setState(prevState => ({
                    newGoal:
                    {
                        ...prevState.newGoal,
                        unit: value
                    }
                }))
                break;

            case "timeframe":
                this.setState(prevState => ({
                    newGoal:
                    {
                        ...prevState.newGoal,
                        timeframe: value
                    }
                }))
                break;

            default:
                console.log("No Goal Field Change Match...");
        }
    }

    onGoalSubmit = (() => {

        console.log("goalSubmit clicked: ", this.props.user._id);

        let d = new Date();
        let timestamp = d.getFullYear() + d.getMonth() + d.getDay() + d.getTime();

        let newGoal = {
            id: timestamp,
            name: this.state.newGoal.sport + " " + this.state.newGoal.qty + " " + this.state.newGoal.unit + " " + this.state.newGoal.timeframe,
            sport: this.state.newGoal.sport,
            isAchieved: false,
            goalType: this.state.newGoal.type,
            goalQty: this.state.newGoal.qty,
            goalUnit: this.state.newGoal.unit,
            goalTimeFrame: this.state.newGoal.timeframe,
            goalProgress: "10%"
        };
        console.log("newGoalObj: ", newGoal, this.state.user.id);
        API.saveGoal(newGoal, this.props.user._id)
            .then(res => this.loadGoals())
            .catch(err => console.log(err));

    });

    onGoalDelete = ((goalID) => {
        API.deleteGoal(this.props.user._id, goalID)
            .then(res => this.loadGoals())
            .catch(err => console.log(err));
    });


    render() {
        let fname = this.props.user.givenName.charAt(0).toUpperCase() + this.props.user.givenName.slice(1);
        // console.log(this.props);

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
                                user={this.props.user}
                                onGoalChange={this.onGoalChange}
                                onGoalSubmit={this.onGoalSubmit}
                                curGoal={this.state.newGoal}
                            />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <CurGoalsCard>
                                    <ListGroup variant="flush">
                                    {this.state.user.goals.map(goal => {
                                        return (
                                            <ListGroup.Item key={goal.id} className="bg-light">
                                                <Row>
                                                    <Col sm={9}>
                                                        {goal.name}
                                                        <div className="progress-bar bg-success mt-2" style={{ width: goal.goalProgress }}> </div>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <DeleteBtn className="ml-5" onClick = {() => this.onGoalDelete(goal.id)}/>
                                                    </Col>
                                                        
                                                </Row>
                                            </ListGroup.Item>
                                        );
                                    })}
                                    </ListGroup>
                                </CurGoalsCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AchievedGoalsCard
                                    userGoals={this.state.user.goals}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Goals;
