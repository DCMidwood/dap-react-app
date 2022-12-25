import { Outlet, useNavigate } from "react-router-dom"
import ReportList from "../components/reports/ReportsList"


const ReportsPage = (props) => {

    const useGoBack = () => {
        console.log("HERE")
        const navigate = useNavigate()
        // navigate('/reports', {replace:true})
        navigate(-1)
    }

    return (
        <div>
            <h1>Reports here!</h1>
            <Outlet />
            <ReportList />
            <button onClick={useGoBack}>Go back</button>
        </div>
    )
}

export default ReportsPage