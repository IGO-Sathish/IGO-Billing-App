import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="tableBoder">Name</th>
                <th className="tableBoder" >Role</th>
                <th className="tableBoder" >Action</th>
    
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const { charactersdata,removerCharacter } = props;

    const rows = charactersdata.map((charactersdata,index) => {
        return (
            <tr  key={index}>
                <td className="tableBoder" >{charactersdata.Name}</td>
                <td  className="tableBoder" >{charactersdata.Role}</td>
                <td  className="tableBoder" > <button onClick={ ()=> removerCharacter(index)} className="Rbtn" > Remove  </button>  </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};















class  Table extends React.Component {


    
    render() {
        
        const { charactersdata,removerCharacter } = this.props

        return (
            <table className="tableBoder" >
                <TableHeader />
                <TableBody removerCharacter={removerCharacter} charactersdata={charactersdata} />
            </table>
        );
    }
}

export default Table;
