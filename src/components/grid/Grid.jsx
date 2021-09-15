import TableBody from "../tableBody/TableBody";
import TableHeader from "../tableHeader/TableHeader";
import Filter from "../filter/Filter";
import Pagination from "../pagination/Pagination";
// import Test from "./Test";
import { useState } from "react";
// import _ from "lodash";

const Grid = ({
  headerData,
  header,
  gridData,
  alternatingColors,
  tableBodyStyle,
  headerCellStyle,
  cellStyle,
  headerStyle,
  initRowsPerPage,
}) => {
  const [showHeader, setShowHeader] = useState(header);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initRowsPerPage);
  const [sortByIndex, setSortByIndex] = useState();
  const [isAscend, setIsAscend] = useState(true);

  const toggleHeader = () => {
    setShowHeader((prevShow) => {
      return !prevShow;
    });
  };
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredData = () => {
    return gridData.filter((row) => {
      return row.find((item) =>
        item.toString().toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  const sortArrayByIndex = (unsorted, isAscend, index) => {
    if (!Number.isInteger(index)) return unsorted;
    return isAscend
      ? unsorted.sort((a, b) => {
          return a > b ? 1 : -1;
        })
      : unsorted.sort((a, b) => {
          return a > b ? -1 : 1;
        });
  };
  const handleSortChange = (index) => {
    console.log("clicked");
    if (index !== sortByIndex) setSortByIndex(index);
    else if (isAscend) setIsAscend(false);
    else {
      setSortByIndex();
      setIsAscend(true);
    }
  };

  const lastRowIdx = currentPage * rowsPerPage;
  const firstRowIdx = lastRowIdx - rowsPerPage;
  const showRows = filteredData().slice(firstRowIdx, lastRowIdx);
  const SortedRows = sortArrayByIndex(showRows, isAscend, sortByIndex);

  return (
    <>
      <Pagination
        rowsPerPage={rowsPerPage}
        rowsAmount={filteredData().length}
        handlePageClick={setCurrentPage}
        handleAmountChange={setRowsPerPage}
      />
      <button onClick={toggleHeader}>toggle header</button>
      <Filter handleFilterChange={handleFilterChange} />
      <table>
        {showHeader && (
          <TableHeader
            setSortByIndex={handleSortChange}
            style={headerStyle}
            data={headerData}
            headerCellStyle={headerCellStyle}
          />
        )}
        <TableBody
          style={tableBodyStyle}
          data={SortedRows}
          alternatingColors={alternatingColors}
          cellStyle={cellStyle}
        />
      </table>
    </>
  );
};

export default Grid;
