import './main-info.css';

import FirstBlockInfo from "../first-block-info/first-block-info";
import BlockInfo from "../block-info";
import LastBlockInfo from "../last-block-info";
import Footer from "../footer";
import InfoBoxes from "../info-boxes";

function MainInfo() {
    return (
        <main className="mainInfo">
            <div className="background1">
                <FirstBlockInfo t1="Middle Odyssey" t2="Программа для middle-руководителей"/>
                <BlockInfo t1="О чем?" t2="Современность диктует новые правила,
                        нам ежедневно приходится реагировать
                        на изменения и принимать решения" lr="r"/>
                <BlockInfo t1="Сейчас..." t2='...как никогда важны сильные и компетентные лидеры.
                        Для твоего развития мы открываем набор на программу
                        для middle-руководителей "Middle Odyssey lvl 1",
                состоящую из 5 модулей'/>
                <InfoBoxes/>
            </div>
            <div className="background2">
                <LastBlockInfo/>
                <Footer/>
            </div>
        </main>
    );
}

export default MainInfo;