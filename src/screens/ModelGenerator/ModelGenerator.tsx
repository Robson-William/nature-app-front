import Row from '../../components/Row/Row';
import './style.css';

export default function ModelGenerator(){
    return (
        <>
            <form className="panel">
                <div className="input-area">
                    <input type="number" name="width" placeholder="Largura" className="width-input field" />
                    <span>X</span>
                    <input name="height" placeholder="Altura" className="height-input field"/>
                    <span>=</span>
                    <input name="area" placeholder="Area" className="area-input field"/>
                </div>

                <div className="info">
                    <input className="area-info field" value="100" name="area-livre"/>
                    <input className="productive-unit-info field" value="50" name="productive-unit"/>
                </div>

                <div className="hortalicas-list">
                    <div className="hortalicas">
                        <input type="radio" name="hortalica" value="Alface" className="choice"/>
                        <label>Alface</label>
                    </div>
                </div>

                <div className="production">
                    <input name="production" placeholder="Produção desejada" className="production-input field"/>
                </div>

                <div className="button">
                    <button>Gerar Modelo</button>
                </div>
            </form>

            <div className="model-area">
                <div className="model">
                    <span>Espaço para circulação</span>
                    
                    <Row />
                </div>
            </div>
        </>
    )
}