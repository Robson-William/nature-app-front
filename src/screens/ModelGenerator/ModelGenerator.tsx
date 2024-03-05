import * as React from 'react';
import { useState, useEffect } from 'react';
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
    width: number | undefined,
    height: number | undefined,
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
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [area, setArea] = useState(0);
    const [production, setProduction] = useState(0);
    const [productiveUnitSize, setProductiveUnitSize] = useState(1.44);
    const [freeSpace, setFreeSpace] = useState(0);
    const [hortalica, setHortalica] = useState('');

    function handleChangeWidth(event: React.ChangeEvent<HTMLInputElement>){
        if(event.currentTarget.valueAsNumber != null){
            setWidth(event.currentTarget.valueAsNumber);
        }
    }

    function handleChangeHeight(event: React.ChangeEvent<HTMLInputElement>){
        if(event.currentTarget.valueAsNumber != null){
            setHeight(event.target.valueAsNumber);
        }
    }

    function handleChangeProduction(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.valueAsNumber != null){
            setProduction(event.target.valueAsNumber);
        }
    }

    function handleChangeHortalica(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value != null){
            setHortalica(event.target.value);
        }
    }

    function handleGetArea(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.valueAsNumber != null){
            setArea(event.target.valueAsNumber);
        }
    }

    function handleGetFreespace(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.valueAsNumber != null){
            setFreeSpace(event.target.valueAsNumber);
        }
    }

    function getProductiveUnit(){
        const productiveUnit = 1.2 * 1.2;

        setProductiveUnitSize(productiveUnit);
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
            area: area,
            freeSpace: freeSpace,
            productiveUnit: productiveUnitSize,
            hortalica: getHortalica(),
            production: production
        }

        setMeasures(newMeasures)
    }

    useEffect(() => {
        if(width != undefined && height != undefined){
            setArea(width * height);
        }
        setFreeSpace(area * 0.75);
    }, [width, height])

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
                        onChange={(e) => setArea(e.currentTarget.valueAsNumber)}
                        readOnly
                    />
                </div>

                <div className="info">
                    <input
                        type="number"
                        className="area-info field"
                        value={area * 0.75}
                        onChange={(e) => handleGetFreespace(e)}
                        name="area-livre"
                        readOnly
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
                    <select name="hortalicas" onChange={(e) => handleChangeHortalica(e)}>
                    {mockHortalicas.map((hortalica) => (
                        <option className="hortalicas" value={hortalica.name} key={hortalica.name}>
                            {hortalica.name}
                        </option>
                    ))}
                    </select>
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
                <div id='garden'>
                    <h2 id='title'>
                        Horta ({measures.area}m²), {Math.trunc(measures.freeSpace / measures.productiveUnit)} unidades produtivas
                    </h2>
                    <div className='model'>
                        <Model info={measures}/>
                    </div>
                </div>

            ): null}
        </>
    )
}