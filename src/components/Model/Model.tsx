import Row from "../Row/Row";
import "./style.css";

export default function Model({info}){
    return (
        <>
            <div className="model">
                <span>Espaço para circulação</span>

                <Row info={info}/>
            </div>
        </>
    )
}