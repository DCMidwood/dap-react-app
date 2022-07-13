import "./Reports.css";

function Reports(props) {
  const reportName = props.reportName;
  const reportDescription = props.reportDescription;

  return (
    <div className="report-item">
      {reportName}: {reportDescription}
      <button>Run Report</button>
    </div>
  );
}

export default Reports;
