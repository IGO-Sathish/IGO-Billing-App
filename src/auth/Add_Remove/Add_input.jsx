import React from "react";

class Add_input extends React.Component {


    initialState={
        name:"",
        job:""
    }
    state = this.initialState



    handleChange =(event) => {
        const {name, value} = event.target;
        this.setState ({[name]:[value]})
    }

    submitForm = () => {
        let character =this.state;
        this.props.handleSubmit(character)
        this.setState (this.initialState)
    }
    

    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            id="name"
                            onChange={this.handleChange}
                            placeholder="Enter Name"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={this.state.job}
                            name="job"
                            id="job"
                            onChange={this.handleChange}
                            placeholder="Enter Job"
                        />
                    </td>
                    <td>
                        <button className="h-[40px] w-[120px] text-center font-bold  px-2 m-2 text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-800" type="button"  onClick={this.submitForm}  value="Add">
                            Add
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
}


export default Add_input;