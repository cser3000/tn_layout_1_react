import './first-block-info.css';

function FirstBlockInfo(props) {
    return (
        <section className="blockInfo1">
            <h1 className="sizeTextInfo1">{props.t1}</h1>
            <h3 className="sizeTextInfo2">{props.t2}</h3>
            <button className="redButton">ХОЧУ записаться!</button>
        </section>
    );
}

export default FirstBlockInfo;