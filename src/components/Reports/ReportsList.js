import React from "react";

import Reports from "./Reports";
import classes from "./ReportsList.module.css"

const ReportList = (props) => {

    const reportsList = props.reportsList.map(report => (
        <li key={report.id}>
            <Reports          
                reportName = {report.title}
                reportDescription= {report.description}
            />
        </li>
        ))
    return (
        <section className={classes.reports}>
            <h2>Reports</h2>
            <ul>
                {reportsList}
            </ul>
        </section>
    )
}

export default ReportList