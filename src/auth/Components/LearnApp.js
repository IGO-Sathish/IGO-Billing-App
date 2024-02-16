import React from "react";
import Table from "../Components/Table";
import Search from "./Search.jsx";
import Memoize from "./Memoize";
import Apidata from "./ApiData.jsx";
import Col1 from "./Col1";
import Col2 from "./Component_ARU";
import  Add_Remove from '../Add_Remove/Add_Remove.jsx'

class App extends React.Component {

  state = {
    characters: [
      {
        Name: "Sathish",
        Role: "Designer",
      },
      {
        Name: "Nagu",
        Role: "FrontEnd-Developer",
      },

      {
        Name: "Rajesh",
        Role: "Java-Developer",
      },

      {
        Name: "Kali",
        Role: "React-Developer",
      },
    ],
  };

  removerCharacter = (index) => {
    const { characters } = this.state;

    // this.state.characters


    let filtered = characters.filter((character, i) => {
      return i !== index;



    });

    // Update the state with the filtered characters
    this.setState({ characters: filtered });


  };

  render() {
    const { characters } = this.state;

    return (
      <div
        className="container "
        style={{ flexDirection: "column", marginTop: "20px", height: "100%" }}
      >





        <div className=" Dynamic_User">
          < Add_Remove/>
        </div>


        <div className=" Dynamic_User">
          <Table
            removerCharacter={this.removerCharacter}
            charactersdata={characters}
          />
        </div>

        <div className=" Dynamic_User">
          <Col2 />
        </div>

        <div className=" Dynamic_User">
          <Col1 />
        </div>

        <div className=" Dynamic_User">
          <h2> Search Bar </h2>
          <Search />
        </div>

        <div className=" Dynamic_User">
          <h2> Memoize </h2>
          <Memoize />
        </div>

        <div className=" Dynamic_User">
          <h2> Json Apidata </h2>
          <Apidata />
        </div>
      </div>
    );
  }
}
export default App;
