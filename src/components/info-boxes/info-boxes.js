import './info-boxes.css';

import buildLeadershipAndCulture from "../../assets/image/icons/build-leadership-and-culture.svg";
import InfoBox from "../info-box";

function InfoBoxes() {
    return (
        <section className="infoBoxes">
            <InfoBox boxNum="box1" t1="Я лидер" t2="Развитие лидерского мышления и
                    управления своей эффективностью"/>
            <InfoBox boxNum="box2" t1="Финансы и банкинг" t2="Финансовые модели, отчетности и
                    их верная трактовка"/>
            <InfoBox boxNum="box3" t1="Дизайн мышление" t2="Создание продуктов и процессов,
                    ориентированных на клиента"/>
            <InfoBox boxNum="box4" t1="Системное мышление при
                    принятии решений" t2="Мышление и принятие решений
                    без когнитивных ошибок"/>
            <InfoBox boxNum="box5" t1="Управление в стиле коучинг" t2="Развитие своей команды для
                    новых достижений"/>
        </section>
    );
}

export default InfoBoxes;