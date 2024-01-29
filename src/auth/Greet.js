import React from 'react'


// function funclass01 () {

//     return <h1> Hello function </h1>
// }

// export const Greet = () => <h1> const Greet </h1>

//Factory Functions
function createPerson(name) {
    return {
        name:"Name",

        greeting(name) {
            let msg = 'my name is ${this.name}';
            console.log(msg);
        }
    }
}

let anbu = createPerson ("Name Anbu")

anbu.greeting ();


createPerson()
function Welcome(props) {

    return <h1> Hello, Function Componenet Displaying {props.name} </h1>;
}

export default Welcome





// export default Greet