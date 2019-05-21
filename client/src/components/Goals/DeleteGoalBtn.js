import React from "react";
import Button from "react-bootstrap/Button";



function DeleteGoalBtn(props) {
    return (<Button {...props} variant="danger">Delete</Button>);
}

export default DeleteGoalBtn;