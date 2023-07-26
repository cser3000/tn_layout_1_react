import './navigation.css';

import ElemNav from "../elem-nav";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <ElemNav iconName="homeLetter" text="Интернет портал"/>
                <ElemNav iconName="iconStaging" text="Управление обучением"/>
                <ElemNav iconName="iconListUl" text="Расписание тренера"/>
                <ElemNav iconName="iconBooks" text="Дистанционные курсы"/>
                <ElemNav iconName="iconBoxContainer" text="Карты развития"/>
                <ElemNav iconName="iconBellOn" text="Обучающие мероприятия"/>
                <ElemNav iconName="iconUsers" text="Тренерский состав"/>
            </ul>
        </nav>
    );
}

export default Navigation