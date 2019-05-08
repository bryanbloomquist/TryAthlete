import React from "react";

function Wrapper(props){
    return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;