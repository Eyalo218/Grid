import Grid from "./components/grid/Grid";
import { DummyData } from "./dummyData";
// import Test from "./components/grid/Test";  // used to test if i can render custom components
function App() {
  return (
    <div className='App'>
      <Grid
        header={true} // toggle header on and off
        headerData={DummyData.cols} // array to show th data
        gridData={DummyData.data} // matrix that contain array of table rows data
        rowsPerPage={10} //how many rows per page
        alternatingColors={true} //optional input deciding if the table will have alternatingColors
        headerStyle={{}} // optional style object for the header
        cellStyle={{}} // optional style object  for the cell
        headerCellStyle={{}} // optional style object  for the header cell
        tableBodyStyle={{}} // optional style object  for the tableBody
      />
    </div>
  );
}

export default App;
