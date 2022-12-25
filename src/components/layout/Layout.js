import React, { Fragment } from "react"
import { useSelector } from "react-redux"

import MainNavigation from "./MainNavigation"
import ProjectDetails from "../project/ProjectDetails" 
import classes from "./Layout.module.css"

const Layout = (props) => {
    const showProjectDetail =  useSelector(state => state.ui.projectDetailIsVisible);

    return(
        <Fragment>
            <MainNavigation />
            {showProjectDetail && <ProjectDetails />}
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout