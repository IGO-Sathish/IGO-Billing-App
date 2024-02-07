import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const { dataproptransfer } = props;

    const rows = dataproptransfer.map((data) => {
        return (
            <tr key={data.id}>
                <td>{data.Name}</td>
                <td>{data.Role}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

class Table extends React.Component {
    render() {
        const { dataproptransfer } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody dataproptransfer={dataproptransfer} />
            </table>
        );
    }
}

export default Table;
