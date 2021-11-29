import React from "react";


const Hello = (props) => {
    // return (
    //     <div>
    //         <h1>Hellow Pranav</h1>
    //     </div>
    // )
    return React.createElement('div',
        {id:'hello', className: "DummyClass"},
        React.createElement('h1', null, "Hello Pranav"))
}

export default Hello