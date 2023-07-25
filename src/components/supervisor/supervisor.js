import './supervisor.css';
import foto from "../../assets/image/foto.png";

function Supervisor() {
    return (
        <div className="supervisor">
            <img src={foto} alt="фото" className="myImg"/>
            <div className="infoSupervisor">
                <span className="nameSupervisor">Константин Константинов</span>
                <span className="postSupervisor">Руководитель департамента</span>
            </div>
        </div>
    );
}

export default Supervisor;