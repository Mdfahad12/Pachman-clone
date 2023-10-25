import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar";
import "./App.css";
import MultipleBoxes1 from "./component/layout/MultipleBoxes1";
import MultipleBoxes from "./component/MultipleBoxes";
function App() {
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-content">
        <Topbar />
        {/* <MultipleBoxes /> */}
        <MultipleBoxes1
  numColumns={2}
  boxesPerColumn={2}
  expandedClassName="expanded"
  reducedClassName="reduced"
  reducedConditions={[
    [2, 1],
    [1, 2],
    [4, 3],
    [3, 4],
    // [6, 5],
    // [5, 6],
  ]}
/>

      </div>
    </>
  );
}

export default App;
