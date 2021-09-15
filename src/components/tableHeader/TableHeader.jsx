import Cell from "../cell/Cell";
const TableHeader = ({ data, className, headerCellStyle, setSortByIndex }) => {
  return (
    <thead>
      <tr className={` ${className}`}>
        {data.map((title, index) => {
          return (
            <Cell
              key={index}
              index={index}
              header
              style={headerCellStyle}
              handleSortChange={setSortByIndex}
            >
              {title}
            </Cell>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
