const Pagination = ({
  rowsPerPage,
  rowsAmount,
  handlePageClick,
  handleAmountChange,
}) => {
  const pageAmount = Math.ceil(rowsAmount / rowsPerPage);
  const pages = [...Array(pageAmount).keys()];
  return (
    <div>
      {pages.map((page) => {
        return (
          // adding 1 to avoid index 0, it will prevent the multiply of showRows
          <button key={page} onClick={() => handlePageClick(page + 1)}>
            {page + 1}
          </button>
        );
      })}
      <select
        value={rowsPerPage}
        onChange={(e) => handleAmountChange(e.target.value)}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};

export default Pagination;
