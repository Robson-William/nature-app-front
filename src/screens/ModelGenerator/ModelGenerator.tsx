export default function ModelGenerator(){
    return (
        <>
            <form className="panel">
                <div className="area-input field">
                    <input name="width" placeholder="Largura" className="width-input field"/>
                    <span>X</span>
                    <input name="height" placeholder="Altura" className="height-input field"/>
                    <span>=</span>
                    <input name="area" className="area-input field"/>
                </div>
                <div className="info">
                    <span className="area-info field">100</span>
                    <span className="productive-unit-info field">50</span>
                </div>
                <div className="hortalicas">
                    <div className="hortalicas field">
                        <span></span>
                    </div>
                </div>
                <div className="production">
                    <label>Produção desejada</label>
                    <input name="production" placeholder="" className="production-input field"/>
                </div>
                <div className="button">
                    <span>Gerar Modelo</span>
                </div>
            </form>

            <div className="model-area">
                <div className="model">
                    <div className="fila">
                        <div className="productive-unit"></div>
                    </div>
                </div>
            </div>
        </>
    )
}