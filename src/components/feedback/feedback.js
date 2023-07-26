import './feedback.css';

import myImage from "../../assets/image/image 242.png";
import bxlMicrosoftTeams from "../../assets/image/icons/bxl_microsoft-teams.svg";
import vscodeIconsFileTypeOutlook from "../../assets/image/icons/vscode-icons_file-type-outlook.svg";

function Feedback() {
    return (
        <div>
            <img src={myImage} alt="photo" className="usersPhoto"/>
            <a href="tel:">
                <img src={bxlMicrosoftTeams} alt="icon"
                     className="icon1"/>
            </a>
            <a href="mailto:">
                <img src={vscodeIconsFileTypeOutlook} alt="icon"
                     className="icon2"/>
            </a>
        </div>
    );
}

export default Feedback;