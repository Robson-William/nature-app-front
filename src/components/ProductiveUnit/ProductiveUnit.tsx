import Seed from "../Seed/Seed";
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

export default function ProductiveUnit({info}:Props){
    const keys = [...Array(info.hortalica.unitArea * 100).keys()];

    return (
        <>
            <div className="productive-unit">
                {
                    keys.map((item) => (
                        <Seed key={item}/>
                    ))
                }
            </div>
        </>
    )
}