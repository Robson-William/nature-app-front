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

type Measures = {
    width: number | undefined,
    height: number | undefined,
    area: number,
    freeSpace: number,
    productiveUnit: number,
    hortalica: Hortalica,
    production: number
}

type Props = {
    info: Measures,
}

export default function Model({info}:Props){
    let production = info.production;

    const calcProductiveUnitPerColumn = (info:Measures) => {
        if(info.height != undefined){
            return Math.trunc((info.height * 0.75) / info.productiveUnit);
        }
    }

    const calcProductiveUnitPerRow = (info:Measures) => {
        if(info.height != undefined){
            return Math.trunc((info.height * 0.75) / info.productiveUnit);
        }
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${calcProductiveUnitPerColumn(info)}, 15px)`,
        gridTemplateRows: `repeat(${calcProductiveUnitPerRow(info)}, 15px)`,
        rowGap: "7px",
        maxHeight: "100%",
        padding: "30px",
        justifyContent: "center"
    }

    const seedsPerUnit = info.hortalica.unitArea * 100;
    
    const arrayLength = Math.ceil(info.production / seedsPerUnit);
    const calc = Math.trunc(info.freeSpace / info.productiveUnit);
    
    const keys = [...Array(arrayLength).keys()];
    const emptyDiv = [...Array(calc - arrayLength).keys()]

    function getSeeds(){
        try {
            if(production > 0){
                return production;
            }
        } finally{
            production -= seedsPerUnit
        }
    }

    return (
        <>
            <div style={gridStyle}>
                {
                    keys.map((item) => (
                        <div className="productive-unit-div" key={item}>
                            <ProductiveUnit info={info} seeds={getSeeds()} seedsPerUnit={seedsPerUnit}/>
                        </div>
                    ))
                }
                {
                    emptyDiv.map((item) => (
                        <div className="productive-unit-div" key={item}>
                            <ProductiveUnit info={info} seeds={getSeeds()} seedsPerUnit={seedsPerUnit}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}