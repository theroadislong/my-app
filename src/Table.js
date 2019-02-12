import React, { Component } from "react";

class Table extends Component {
  render() {
    const { charData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charData={charData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.charData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
