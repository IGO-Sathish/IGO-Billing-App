import React from "react";
// import Table from "../Components/Table";
// import Search from "./Search.jsx";
// import Memoize from "./Memoize";
// import Apidata from "./ApiData.jsx";
// import Col1 from "./Col1";
// import Col2 from "./Component_ARU";
// import  AddRemove from '../Add_Remove/Add_Remove.jsx'
// import Greet from '../Greet'
import Invoice from '../Invoice/Invoice'




// class App extends React.Component {

//   state = {
//     characters: [
//       {
//         Name: "Sathish",
//         Role: "Designer",
//       },
//       {
//         Name: "Nagu",
//         Role: "FrontEnd-Developer",
//       },

//       {
//         Name: "Rajesh",
//         Role: "Java-Developer",
//       },

//       {
//         Name: "Kali",
//         Role: "React-Developer",
//       },
//     ],
//   };

//   removerCharacter = (index) => {
//     const { characters } = this.state;




//     let filtered = characters.filter((character, i) => {
//       return i !== index;



//     });


//     this.setState({ characters: filtered });


//   };

//   render() {
//     const { characters } = this.state;

//     return (


//       <div  className="" >



//       <div
//         className="container "
//         style={{ flexDirection: "column", marginTop: "20px", height: "100%" }}
//       >




// {/* 
// <div className=" Dynamic_User">
//           < Greet/>
//         </div>

//         <div className=" Dynamic_User">
//           < AddRemove/>
//         </div>


//         <div className=" Dynamic_User">
//           <Table
//             removerCharacter={this.removerCharacter}
//             charactersdata={characters}
//           />
//         </div>

//         <div className=" Dynamic_User">
//           <Col2 />
//         </div>

//         <div className=" Dynamic_User">
//           <Col1 />
//         </div>

//         <div className=" Dynamic_User">
//           <h2  className="text-3xl font-bold text-gray-900  "  > Search Bar </h2>
//           <Search />
//         </div>

//         <div className=" Dynamic_User">
//           <h2  className="text-3xl font-bold text-gray-900  "  > Memoize </h2>
//           <Memoize />
//         </div>

//         <div className=" Dynamic_User">
//           <h2  className="text-3xl font-bold text-gray-900  "  > Json Apidata </h2>
//           <Apidata />
//         </div> */}
//       </div>
//     );
//   }
// }
// export default App;


const InvoiceCreatePopup = () => {
  return (
    <>
      
 

                <Invoice />

       
    
      
  
    </>
  );
};

export default InvoiceCreatePopup;