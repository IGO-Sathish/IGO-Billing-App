import React from "react";
import Table from "./Table";



class Add_Remove extends React.Component {
    state = { character: [] };

    removeFunction = (index) => {
        let filtered = this.state.character.filter((val,i)=> {
            return ( i !== index )
        });

        this.setState({character: filtered})
    }

  handleSubmit = (character) => {
   this.setState({character: [...this.state.character,character]})
  }



    render() {
        return (
            <div>
                <h1>Add & Remove User Data</h1>

         

                <Table 
                handleSubmit={this.handleSubmit}
                 removeFunction={this.removeFunction} 
                 character={this.state.character}  
                 />
            </div>
        )
    }


}

export default Add_Remove;