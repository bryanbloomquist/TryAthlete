import React from "react";
import Button from "react-bootstrap/Button";



function UnfriendBtn(props) {
    return (<Button {...props} variant="danger">Unfriend</Button>);
}

export default UnfriendBtn;