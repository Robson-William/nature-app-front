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

type Measures = {
    width: number,
    height: number,
    area: number,
    freeSpace: number,
    productiveUnit: number,
    hortalica: Hortalica,
    production: number
}

type Props = {
    info: Measures
    seeds: number | undefined
}

export default function ProductiveUnit({info, seeds}:Props){
    const ahahaha = info.hortalica.unitArea * 100;
    const keys = [...Array(seeds).keys()];
    console.log(seeds)

    return (
        <>
            <div className="productive-unit">
                {
                    keys.map((item) => (
                        <Seed key={item}/>
                    )).filter((e,k) => k < ahahaha)
                }
            </div>
        </>
    )
}