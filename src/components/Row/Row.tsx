import ProductiveUnit from "../ProductiveUnit/ProductiveUnit";
import "./style.css";

export default function Row({info}){
    const arrayLength = Math.trunc(info.production / (info.hortalica[0].unitArea * 100));
    
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