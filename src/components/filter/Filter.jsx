const Filter = (props) => {
  const handleFilterChange = (e) => {
    //NTS : debouncer if you have time
    props.handleFilterChange(e.target.value);
  };
  return <input type='text' onKeyUp={handleFilterChange} />;
};
export default Filter;
