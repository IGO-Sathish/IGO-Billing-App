// import React from 'react';



// const User = () => {
//   return <h1>Hello, Users   </h1>;
// }

// export default User;



import React from "react";
import Appdummy from "./Appdummy";

class App extends  React.Component {

    render() {

            const characters = [{
                Name: "Sathish",
                Role: "Designer"
            },
            {
                Name: "Nagu",
                Role: "FrontEnd-Developer"
            },

            {
                Name: "Rajesh",
                Role: "Java-Developer"
            },

            {
                Name: "Kali",
                Role: "React-Developer"
            },
    ]



        return (
        <div  >


        <h1> Table Design </h1>

        <br></br>


      <div>

         <Appdummy dataproptransfer={characters} />

         </div>

        </div>
        )

    }
}
 export default App;