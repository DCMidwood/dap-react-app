import "./Reports.css";

const Reports = (props) => {
  const reportName = props.reportName;
  const reportDescription = props.reportDescription;

  return (
    <div className="report-item">
      <strong>{reportName}</strong>: {reportDescription}
      <button>Run Report</button>
    </div>
  );
}

export default Reports;
