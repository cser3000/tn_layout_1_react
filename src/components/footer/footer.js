import './footer.css';

import Feedback from "../feedback";

function Footer() {
    return (
        <footer className="myFooter">
            <div className="question">
                <h2 className="questionText">задать вопрос</h2>
            </div>
            <div className="usersContent">
                <Feedback/>
                <Feedback/>
            </div>
        </footer>
    );
}

export default Footer;