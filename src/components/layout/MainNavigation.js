import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

import ProjectDropdown from '../project/ProjectDropdown';
import ProjectDetailButton from '../project/ProjectDetailButton';
import logoImage from "../../assets/dap-react-app-logo.png";

const MainNavigation = () => {
    return (
    <header className={classes.header}>
        <div>
            <img className={classes.logo} src={logoImage} alt="logo" />
        </div>
        <a className={classes.title} >DAP React App</a>
        <div>
            <ProjectDetailButton />
            <ProjectDropdown />
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/' 
                        className={(navData) => navData.isActive ? classes.active : ''}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/portal' 
                        className={(navData) => navData.isActive ? classes.active : ''}
                    >
                        Design Portal
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/tasks' 
                        className={(navData) => navData.isActive ? classes.active : ''}
                    >
                        Task Manager
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                            to='/reports' 
                            className={(navData) => navData.isActive ? classes.active : ''}
                        >
                            Reports
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation