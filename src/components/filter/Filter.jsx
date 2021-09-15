const Filter = (props) => {
  const handleFilterChange = (e) => {
    props.handleFilterChange(e.target.value);
  };
  return <input type='text' onKeyUp={handleFilterChange} />;
};
export default Filter;
