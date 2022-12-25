import Layout from "../components/layout/Layout";

import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError

    return(
        <>
            <Layout>
                <h1 style= {{color: "red"}}>Error </h1>
                <p>{error.message}</p>
            </Layout>
        </>
    )
}

export default ErrorPage