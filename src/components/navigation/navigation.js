import './navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li className="elemNav">
                    <a href="#" className="homeLetter">
                        <span className="linkText">Интернет портал</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconStaging">
                        <span className="linkText">Управление обучением</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconListUl">
                        <span className="linkText">Расписание тренера</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconBooks">
                        <span className="linkText">Дистанционные курсы</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconBoxContainer">
                        <span className="linkText">Карты развития</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconBellOn">
                        <span className="linkText">Обучающие мероприятия</span>
                    </a>
                </li>
                <li className="elemNav">
                    <a href="#" className="iconUsers">
                        <span className="linkText">Тренерский состав</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation