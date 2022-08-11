import { useState } from "react";

import ReportsList from "./components/Reports/ReportsList";
import ProjectWorkpack from "./components/ProjectWorkpack/ProjectWorkpack";

import ListReports from "./reports_list.json"

import WebMap from "./components/Map/WebMap";

function App() {

  const [dropdownProjectWorkpack, setDropdownProjectWorkpack] = useState(
    "Project A: WorkpackA"
  );

  const dropdownChangeHandler = (selectedProjectWorkpack) => {
    setDropdownProjectWorkpack(selectedProjectWorkpack);
    console.log(selectedProjectWorkpack);
  };

  return (
    <div>
      <ProjectWorkpack
        selectedProjectWorkpack={dropdownProjectWorkpack}
        onDropdwonChange={dropdownChangeHandler}
      />
      <br /><br/>

      <ReportsList reportsList ={ListReports} />
      <br /><br/>
      <WebMap />
    </div>
  );
}

export default App;
