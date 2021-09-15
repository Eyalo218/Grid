// import styled from "styled-components";

// const CellHeader = styled.th``;

// const CellData = styled.td``;

const Cell = (props) => {
  return (
    <>
      {props.header ? (
        <th
          style={{ ...props.style }}
          onClick={() => {
            props.handleSortChange(props.index);
          }}
        >
          {props.children}
        </th>
      ) : (
        <td style={props.style}>{props.children}</td>
      )}
    </>
  );
};

export default Cell;
