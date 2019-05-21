import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ChallengeForm(props) {
    console.log(props.newChallenge)
    return (
        <Form>
            <h3 className="py-3">Challenge a Friend</h3>
            <Form.Group as={Row} controlId="newChallenge">
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Friend:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="fChallenged" className="my-2" as="select" onChange={props.onChallengeChange} defaultValue="">
                            <option disabled></option>
                            {props.friends.map(friend => {
                                console.log("Friend Map : ",friend);
                            return (
                                <option key={friend.id} value={friend.id} title={friend.email}>{friend.givenName} {friend.familyName}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Sport:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="sport" className="my-2" as="select" onChange={props.onChallengeChange} defaultValue="Run">
                        <option>Run</option>
                        <option>Ride</option>
                        <option>Swim</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right  my-2">Type:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="type" className="my-2" as="select" onChange={props.onChallengeChange} defaultValue="Distance">
                        <option>Distance</option>
                        <option>Frequency</option>
                        <option>Time</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Qty:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="qty" className="my-2" type="number" min={1} onChange={props.onChallengeChange} defaultValue={props.newChallenge.qty} />
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Unit:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="unit" className="my-2" as="select" onChange={props.onChallengeChange} defaultValue="mi">
                        <option>mi</option>
                        <option>km</option>
                        <option>minutes</option>
                        <option>days</option>
                        <option>times</option>
                        <option>meters</option>
                        <option>yards</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Time frame:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onChallengeChange} defaultValue="This Week">
                        <option>Today</option>
                        <option>This Week</option>
                    </Form.Control>
                </Col>

                <Col sm={{ span: 10, offset: 1 }}>
                    <Button type="submit" variant="warning" size="lg" className="my-2" block onClick={() => props.onChallengeSubmit()} >
                        Challenge Friend
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default ChallengeForm;