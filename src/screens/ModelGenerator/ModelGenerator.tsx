import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Model from '../../components/Model/Model';

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

const mockHortalicas = [
    {
        name: 'Alface Americana',
        unit: 'Cabeça',
        distLine: 0.3,
        distSeed: 0.3,
        unitArea: 0.09,
        growingDays: 45,
        seedlingsFirstPlanting: 74,
        unitsProduced: 56,
        unitsNeedToSell: 1
    },
    {
        name: 'Couve',
        unit: 'Maço',
        distLine: 0.4,
        distSeed: 0.4,
        unitArea: 0.16,
        growingDays: 60,
        seedlingsFirstPlanting: 42,
        unitsProduced: 10,
        unitsNeedToSell: 3
    }
] as Hortalica[]

export default function ModelGenerator(){
    const [hortalicas, setHortalicas] = useState<Hortalica[]>(mockHortalicas);
    const [measures, setMeasures] = useState<Measures>();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);
    const [production, setProduction] = useState(0);
    const [productiveUnitSize, setProductiveUnitSize] = useState(0);
    const [freeSpace, setFreeSpace] = useState(0);
    const [hortalica, setHortalica] = useState('');

    function handleChangeWidth(event: React.ChangeEvent<HTMLInputElement>){
        setWidth(event.currentTarget.valueAsNumber);
    }

    function handleChangeHeight(event: React.ChangeEvent<HTMLInputElement>){
        setHeight(event.target.valueAsNumber);
    }

    function handleChangeProduction(event: React.ChangeEvent<HTMLInputElement>){
        setProduction(event.target.valueAsNumber);
    }

    function handleChangeHortalica(event: React.ChangeEvent<HTMLInputElement>){
        setHortalica(event.target.value);
    }

    function handleGetArea(){
        const area = width * height;

        setArea(area);
        return area;
    }

    function handleGetFreespace(){
        const freespace = area * 0.75;

        setFreeSpace(freespace);
        return freespace;
    }

    function getProductiveUnit(){
        const productiveUnit = 1.2 * 1.2;

        setProductiveUnitSize(productiveUnit);
        return productiveUnit;
    }

    function getHortalica(){
        const newHortalica = hortalicas.filter((hortalicaObj) => hortalicaObj.name === hortalica)
    
        return newHortalica[0];
    }

    function addMeasures(event: React.FormEvent){
        event.preventDefault();

        let newMeasures = {} as Measures;

        newMeasures = {
            width: width,
            height: height,
            area: handleGetArea(),
            freeSpace: handleGetFreespace(),
            productiveUnit: getProductiveUnit(),
            hortalica: getHortalica(),
            production: production
        }

        setMeasures(newMeasures)
    }
    
    const columns = {
        display: "grid",
        gridRowGap: "50px",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        width: "60%",
        maxHeight: "100%",
        margin: "auto",
    }

    return (
        <>
            <form
                className="panel"
                onSubmit={addMeasures}
            >
                <div className="input-area">
                    <input
                        type="number"
                        name="width"
                        placeholder="Largura"
                        className="width-input field"
                        onChange={handleChangeWidth}
                        value={width}
                    />
                    <span>X</span>

                    <input
                        type="number"
                        name="height"
                        placeholder="Altura"
                        className="height-input field"
                        onChange={(e) => handleChangeHeight(e)}
                        value={height}
                    />
                    <span>=</span>

                    <input
                        type="number"
                        name="area"
                        placeholder="Area"
                        className="area-input field"
                        value={area}
                        disabled
                    />
                </div>

                <div className="info">
                    <input
                        type="number"
                        className="area-info field"
                        value={area * 0.75}
                        name="area-livre"
                        disabled
                    />
                    <input
                        type="number"
                        className="productive-unit-info field"
                        value={productiveUnitSize}
                        name="productive-unit"
                        disabled
                    />
                </div>

                <div className="hortalicas-list">
                    {mockHortalicas.map((hortalica) => (
                        <div className="hortalicas" key={hortalica.name}>
                            <input
                                type="radio"
                                name="hortalica"
                                value={hortalica.name}
                                className="choice"
                                onChange={(e) => handleChangeHortalica(e)}
                            />
                            <label>{hortalica.name}</label>
                        </div>
                    ))}
                    
                </div>

                <div className="production">
                    <input
                        type="number"
                        name="production"
                        placeholder="Produção desejada"
                        className="production-input field"
                        onChange={(e) => handleChangeProduction(e)}
                    />
                </div>

                <div className="button">
                    <button type='submit'>Gerar Modelo</button>
                </div>
            </form>
            
            {measures ? (
                <div className='model'>
                    <Model info={measures}/>
                </div>
            ): null}
        </>
    )
}