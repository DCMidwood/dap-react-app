import { useState } from "react";
import Reports from "./components/Reports";
import ProjectWorkpack from "./components/ProjectWorkpack/ProjectWorkpack";

function App() {
  const reports = [
    {
      id: 1,
      title: "Report A",
      description: "Returns the xxx of xxx",
    },
    {
      id: 2,
      title: "Report B",
      description: "Returns the xxx of xxx",
    },
    {
      id: 3,
      title: "Report C",
      description: "Returns the xxx of xxx",
    },
  ];
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
      <Reports
        reportName={reports[0].title}
        reportDescription={reports[0].description}
      />
      <Reports
        reportName={reports[1].title}
        reportDescription={reports[1].description}
      />
    </div>
  );
}

export default App;
