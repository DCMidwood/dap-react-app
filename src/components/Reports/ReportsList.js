import React from "react";
import { useSelector } from "react-redux";

import Reports from "./Reports";
import classes from "./ReportsList.module.css"


const DUMMY_REPORTS = [
    {
       "id":1,
       "title":"Report A",
       "description":"Returns the xxx of xxx"
    },
    {
       "id":2,
       "title":"Report B",
       "description":"Returns the xxx of xxx"
    },
    {
       "id":3,
       "title":"Report C",
       "description":"Returns the xxx of xxx"
    },
    {
      "id":4,
      "title":"Report D",
      "description":"Returns the xxx of xxx"
   }
 ]

const ReportList = (props) => {
    const activeProjectGlobalId =  useSelector(state => state.activeProject.activeProjectGlobalid);
    console.log(activeProjectGlobalId)

    const reportsList = DUMMY_REPORTS.map(report => (
        <li key={report.id}>
            <Reports          
                reportName = {report.title}
                reportDescription= {report.description}
            />
        </li>
        ))
    return (
        <section className={classes.reports}>
            <h2>Reports for Project {activeProjectGlobalId}</h2>
            <ul>
                {reportsList}
            </ul>
        </section>
    )
}

export default ReportList