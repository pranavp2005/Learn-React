import React from 'react'


// function Greet() {
//     return <h1>Hello Pranav </h1>
// }

// We will use the arrow syntax

export const Greet = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Hellow {props.name} a.k.a {props.superheroname}</h1>
            {props.children}
        </div>
    )
}

//export default Greet