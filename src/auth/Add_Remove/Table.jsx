import React from "react";
import Add_input from "./Add_input";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    );
};

const TableBody = ({ character, removeFunction }) => {

    const rows = character.map((val, index) =>

        <tr>
            <td>{val.name}</td>
            <td>{val.job}</td>
            <td> <button onClick={() => removeFunction(index)} > Remove </button> </td>
        </tr>

    )

    return (
        <tbody>

            {rows}

        </tbody>
    )
}



class Table extends React.Component {
    render() {

        const {handleSubmit, removeFunction, character } = this.props

        return (

            <table>
                <TableHeader />
                <Add_input handleSubmit={handleSubmit} />

                <TableBody removeFunction={removeFunction} character={character} />
            </table>
        )
    }
}


export default Table;
