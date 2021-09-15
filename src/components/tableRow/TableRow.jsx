import Cell from "../cell/Cell";
import styled from "styled-components";

const Row = styled.tr`
  &.alternate:nth-child(even) {
    background-color: lightblue;
  }
  &.active {
    background-color: limegreen !important;
  }
`;

const TableRow = (props) => {
  const handleClick = () => {
    props.handleClick(props.idx);
  };
  return (
    <Row
      onClick={handleClick}
      className={`${props.alternatingColors && "alternate"}  ${
        props.isActive && "active"
      }
      }`}
    >
      {props.data.map((cellData, index) => {
        return (
          <Cell key={index} style={props.cellStyle}>
            {cellData}
          </Cell>
        );
      })}
    </Row>
  );
};

export default TableRow;
