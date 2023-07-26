import "./elem-nav.css";

function ElemNav(props) {
    return (
        <li className="elemNav">
            <a href="#" className={props.iconName}>
                <span className="linkText">{props.text}</span>
            </a>
        </li>
    );
}

export default ElemNav;