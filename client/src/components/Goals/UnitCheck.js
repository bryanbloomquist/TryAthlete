import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function UnitCheck(props) {
console.log(props)
return(
    <div>
        <Col sm={6}>
            <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="mi">
                <option>mi</option>
                <option>km</option>
                {/* <option>minutes</option>
                <option>days</option>
                <option>times</option>
                <option>meters</option>
                <option>yards</option> */}
            </Form.Control>
        </Col>
    </div>
)}

export default UnitCheck;