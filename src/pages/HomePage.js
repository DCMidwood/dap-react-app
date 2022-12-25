import { Route, Routes } from "react-router-dom";
import WebMap from "../components/mapping/OverviewMap";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to DAP</h1>
            <Routes>
                <Route path="/new-user" element={<p>Welcome, new user!</p>}/>
            </Routes>
            <WebMap latitude={30} longitude={-20} zoom = {0}/> 
        </div>
    )
}

export default HomePage;