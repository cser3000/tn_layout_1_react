import './header.css';


import foto from '../../assets/image/foto.png'
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