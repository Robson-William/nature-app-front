import ProductiveUnit from "../ProductiveUnit/ProductiveUnit";
import "./style.css";

export default function Row({info}){
    const keys = [...Array(info.production).keys()];

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