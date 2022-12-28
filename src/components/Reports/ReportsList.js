import { useSelector } from "react-redux";

import Reports from "./Reports";
import classes from "./ReportsList.module.css"

const ReportList = (props) => {
    const activeProjectGlobalId =  useSelector(state => state.activeProject.activeProjectGlobalid);
    console.log(props.reports)
    const loadedReports = []
    for (const key in props.reports){
        loadedReports.push(
            {
                id: key,
                name: props.reports[key].name,
                description: props.reports[key].description,
                content : props.reports[key].content
            }
        )
    }
    const reportsList = loadedReports.map(report => (
        <li key={report.id}>
            <Reports          
                reportName = {report.name}
                reportDescription= {report.description}
            />
        </li>
        ))


    return (
        <section className={classes.reports}>
            <h2>Reports for Project {activeProjectGlobalId}</h2>
            {reportsList}
        </section>
    )
}

export default ReportList