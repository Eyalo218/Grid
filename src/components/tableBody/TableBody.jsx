import TableRow from "../tableRow/TableRow";
import { useState } from "react";

const TableBody = ({ data, alternatingColors, cellStyle }) => {
  const [activeRow, setActiveRow] = useState();

  //usually ill keep it in a js file containing all the helper functions, but i only had this one and i use it only here.
  const getRandomString = (length) => {
    const randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };

  const addBackground = (i) => {
    if (activeRow === i) setActiveRow();
    else setActiveRow(i);
  };

  return (
    <tbody>
      {data.map((rowData, index) => {
        return (
          <TableRow
            isActive={index === activeRow}
            data={rowData}
            alternatingColors={alternatingColors}
            idx={index}
            key={getRandomString(10)}
            cellStyle={cellStyle}
            handleClick={addBackground}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
