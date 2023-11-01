import { useState } from 'react';
import Row from '../../components/Row/Row';
import './style.css';
import Model from '../../components/Model/Model';

type Measures = {
    width: number,
    height: number,
    area: number,
    freeSpace: number,
    productiveUnit: number,
    production: number
}

const mockHortalicas = [
    {
        name: 'Alface',
        unit: 'Cabeça',
        distLine: 0.3,
        distSeed: 0.3,
        unitArea: 0.09,
        growingDays: 45,
        seedlingsFirstPlanting: 74,
        unitsProduced: 56,
        unitsNeedToSell: 1
    }
]

export default function ModelGenerator(){
    const [hortalicas, setHortalicas] = useState(mockHortalicas);
    const [measures, setMeasures] = useState({});
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);
    const [production, setProduction] = useState(0);
    const [productiveUnitSize, setProductiveUnitSize] = useState(0);
    const [freeSpace, setFreeSpace] = useState(0);
    const [hortalica, setHortalica] = useState();

    function handleChangeWidth(event){
        setWidth(event.target.valueAsNumber);
    }

    function handleChangeHeight(event){
        setHeight(event.target.valueAsNumber);
    }

    function handleChangeProduction(event){
        setProduction(event.target.valueAsNumber);
    }

    function handleChangeHortalica(event){
        setHortalica(event.target.valueAsNumber);
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
        const productiveUnit = freeSpace * 0.10;

        setProductiveUnitSize(productiveUnit);
        return productiveUnit;
    }

    function getHortalica(){
        const newHortalica = hortalicas.filter((hortalicaObj) => hortalicaObj.name === hortalica)

        return newHortalica;
    }

    function addMeasures(event){
        event.preventDefault();

        const newMeasures = {
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
                        value={freeSpace}
                        name="area-livre"
                        disabled
                    />
                    <input
                        type="number"
                        className="productive-unit-info field"
                        value="50"
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

            <div className="model-area">
                <Model info={measures}/>
            </div>
        </>
    )
}