import React, { Component } from 'react';
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class ActivityForm extends Component {

    render(props) {
        console.log(props)
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="number" placeholder="1"></Form.Control>
                        <Form.Label>Units</Form.Label>
                        <Form.Control as="select">
                            <option value="unit1">mi</option>
                            <option value="unit2">km</option>
                        </Form.Control>
                        <br />
                        <Button className="btn btn-warning" block onClick={() => API.saveActivity(test, test)}>Log it</Button>
                    </Form.Group>
                </Form>
                </div>
        )
    }
}

export default ActivityForm