import './header.css';


import Search from "../search";
import Supervisor from "../supervisor";

function Header() {

    return (
        <header className="myHeader">
            <Search/>
            <Supervisor/>
        </header>
    )
}

export default Header;