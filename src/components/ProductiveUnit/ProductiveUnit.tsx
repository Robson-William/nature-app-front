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
    info: Measures,
    seeds: number | undefined,
    seedsPerUnit: number
}

export default function ProductiveUnit({info, seeds, seedsPerUnit}:Props){
    const keys = [...Array(seeds).keys()];

    return (
        <>
            <div className="productive-unit">
                {
                    keys.map((item) => (
                        <Seed key={item}/>
                    )).filter((e,k) => k < seedsPerUnit)
                }
            </div>
        </>
    )
}