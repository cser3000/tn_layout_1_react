import './sidebar.css';

import Navigation from "../navigation";
import InfoQr from "../info-qr";

function Sidebar() {
    return (
        <div className="sidebar">
            <Navigation/>
            <InfoQr/>
        </div>
    );
}

export default Sidebar;