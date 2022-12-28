import { Outlet, useNavigate, useLoaderData, defer, Await  } from "react-router-dom"

import React, { Suspense } from "react";
import { getReports } from "../utils/api";

import ReportList from "../components/reports/ReportsList"


const ReportsPage = () => {
    const loaderData = useLoaderData()

    const useGoBack = () => {
        const navigate = useNavigate()
        // navigate("/home")
    }

    return (
        <div>
            <h1>Reports here!</h1>
            <Outlet />
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={loaderData.reports} errorElement={<p>Error loading reports.</p>} >
                    {(loadedReports) => <ReportList reports={loadedReports} />}
                </Await>
            </Suspense>
            <button onClick={useGoBack}>Go back</button>
        </div>
    )
}

export default ReportsPage

export async function loader(){
    return defer({reports: getReports()})
}