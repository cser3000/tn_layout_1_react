import './info-qr.css';
import QR from "../../assets/image/QR.svg";

function InfoQr() {
    return (
        <aside className="infoQR">
            <h3 className="textQR">Полезные ссылки и дополнительные материалы для новичков</h3>
            <img src={QR} alt="QR" className="imgQR"/>
            <button className="buttonQR">Подробнее</button>
        </aside>
    );
}

export default InfoQr;