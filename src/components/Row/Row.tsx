import ProductiveUnit from "../ProductiveUnit/ProductiveUnit";
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

export default function Row({info}:Props){
    const arrayLength = Math.trunc(info.production / (info.hortalica.unitArea * 100));
    
    const keys = [...Array(arrayLength).keys()];

    return (
        <>
            <div className="row">
                {
                    keys.map((item) => (
                        <ProductiveUnit info={info} key={item}/>
                    ))
                }
            </div>
        </>
    )
}