import React from "react";

import Reports from "./Reports";
import classes from "./ReportsList.module.css"

const ReportList = (props) => {
    return (
        <div className={classes.reports}>
            <h2>Reports</h2>
            <ul>
                {props.reportsList.map((report) => (
                    <li key={report.id}>
                        <Reports          
                            reportName = {report.title}
                            reportDescription= {report.description}
                        />
                    </li>
        ))}
      </ul>
        </div>
    )
}

export default ReportList