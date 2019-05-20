import React from "react";
import Button from "react-bootstrap/Button";



function DeleteChalBtn(props) {
    return (<Button {...props} variant="danger">{props.btnname}</Button>);
}

export default DeleteChalBtn;