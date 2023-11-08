import {useState} from "react";
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
}

export default function Model({info}:Props){
    let production = info.production;

    const calcProductiveUnitPerColumn = (info:Measures) => {
        return Math.trunc((info.width * 0.75) / info.productiveUnit);
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${calcProductiveUnitPerColumn(info)}, 100px)`,
        gridTemplateRows: `repeat(${calcProductiveUnitPerColumn(info)}, 100px)`,
        rowGap: "30px",
        width: "100%",
        maxHeight: "100%",
        padding: "30px"
    }

    const seedsPerUnit = info.hortalica.unitArea * 100;
    
    const arrayLength = Math.ceil(info.production / seedsPerUnit);
    const keys = [...Array(arrayLength).keys()];

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
                            <ProductiveUnit info={info} seeds={getSeeds()}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}