import './main.css';

import Sidebar from "../sidebar";
import MainInfo from "../main-info";


function Main() {
    return (
        <div className="mainContent">
            <Sidebar/>
            <MainInfo/>
        </div>
    )
}

export default Main;