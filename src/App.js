import { useState } from "react";
import Reports from "./components/Reports";
import ProjectWorkpack from "./components/ProjectWorkpack/ProjectWorkpack";

import ReportsList from "./reports_list.json"

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
      <h2>Reports</h2>

      <br /><br/>
      {
      ReportsList.map(report => {
        return (
          <Reports
            reportName = {report.title}
            reportDescription= {report.description}
            />
        )
      })}
      <WebMap />
    </div>
  );
}

export default App;
