import ProductiveUnit from "../ProductiveUnit/ProductiveUnit";
import "./style.css";

export default function Row({info}){
    return (
        <>
            <div className="row">
                <ProductiveUnit info={info}/>
            </div>
        </>
    )
}