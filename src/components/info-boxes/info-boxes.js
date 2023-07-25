import './info-boxes.css';

import buildLeadershipAndCulture from "../../assets/image/icons/build-leadership-and-culture.svg";

function InfoBoxes() {
    return (
        <section className="infoBoxes">
            <div className="infoBox1">
                <h3 className="infoBoxSizeText1">Я лидер</h3>
                <p className="infoBoxSizeText2">Развитие лидерского мышления и
                    управления своей эффективностью</p>
                <a href="#" className="moreInfo">подробнее</a>
                <img src={buildLeadershipAndCulture} alt="icon"
                     className="buildIcon"/>
            </div>
            <div className="infoBox2">
                <h3 className="infoBoxSizeText1">Финансы и банкинг</h3>
                <p className="infoBoxSizeText2">Финансовые модели, отчетности и
                    их верная трактовка</p>
                <a href="#" className="moreInfo">подробнее</a>
                <img src={buildLeadershipAndCulture} alt="icon"
                     className="buildIcon"/>
            </div>
            <div className="infoBox3">
                <h3 className="infoBoxSizeText1">Дизайн мышление</h3>
                <p className="infoBoxSizeText2">Создание продуктов и процессов,
                    ориентированных на клиента</p>
                <a href="#" className="moreInfo">подробнее</a>
                <img src={buildLeadershipAndCulture} alt="icon"
                     className="buildIcon"/>
            </div>
            <div className="infoBox4">
                <h3 className="infoBoxSizeText1">Системное мышление при
                    принятии решений</h3>
                <p className="infoBoxSizeText2">Мышление и принятие решений
                    без когнитивных ошибок</p>
                <a href="#" className="moreInfo">подробнее</a>
                <img src={buildLeadershipAndCulture} alt="icon"
                     className="buildIcon"/>
            </div>
            <div className="infoBox5">
                <h3 className="infoBoxSizeText1">Управление в стиле коучинг</h3>
                <p className="infoBoxSizeText2">Развитие своей команды для
                    новых достижений</p>
                <a href="#" className="moreInfo">подробнее</a>
                <img src={buildLeadershipAndCulture} alt="icon"
                     className="buildIcon"/>
            </div>
        </section>
    );
}

export default InfoBoxes;