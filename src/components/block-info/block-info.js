import './block-info.css';

function BlockInfo(props) {
    let clnm = 'blockInfoLeft';
    if (props.lr === 'r') {
        clnm = 'blockInfoRight'
    }
    return (
        <section className={clnm}>
            <h1 className="sizeTextInfo1">{props.t1}</h1>
            <p className="sizeTextInfo3">{props.t2}</p>
        </section>
    );
}

export default BlockInfo;