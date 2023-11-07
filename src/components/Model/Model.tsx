import Row from "../Row/Row";
import "./style.css";

type Hortalica = {
    name: string,
    unit: string,
    distLine: number,
    distSeed: number,
    unitArea: number,
    growingDays: number,
    seedlingsFirstPlanting: number,
    unitsProduced: number,
    unitsNeedToSell: number
}

type Props = {
    info: {
        width: number,
        height: number,
        area: number,
        freeSpace: number,
        productiveUnit: number,
        hortalica: Hortalica,
        production: number
    }
}

export default function Model({info}:Props){
    return (
        <>
            <div className="model">
                <span>Espaço para circulação</span>

                <Row info={info}/>
            </div>
        </>
    )
}