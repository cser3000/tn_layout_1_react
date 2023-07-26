import './info-box.css';
import buildLeadershipAndCulture from "../../assets/image/icons/build-leadership-and-culture.svg";

function InfoBox(props) {
    return (
        <div className={"infoBox1 " + props.boxNum}>
            <h3 className="infoBoxSizeText1">{props.t1}</h3>
            <p className="infoBoxSizeText2">{props.t2}</p>
            <a href="#" className="moreInfo">подробнее</a>
            <img src={buildLeadershipAndCulture} alt="icon"
                 className="buildIcon"/>
        </div>
    );
}

export default InfoBox;