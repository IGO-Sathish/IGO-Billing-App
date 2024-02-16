import React from "react";
import AddInput from "./Add_input";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th className=" text-center" >Action</th>
            </tr>
        </thead>
    );
};

const TableBody = ({ character, removeFunction }) => {

    const rows = character.map((val, index) =>

        <tr className="mb-2 h-[50px]" >
            <td>{val.name}</td>
            <td>{val.job}</td>
            <td > 
            <button className="h-[40px] w-[120px] text-center  px-2 m-2  text-red-100 transition-colors duration-150 font-bold  bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={() => removeFunction(index)} > Remove </button> 
            
            </td>
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
                <AddInput handleSubmit={handleSubmit} />

                <TableBody removeFunction={removeFunction} character={character} />
            </table>
        )
    }
}


export default Table;
