import { useState } from 'react';
import Seed from "../Seed/Seed";
import "./style.css";

export default function ProductiveUnit({info}){
    const keys = [...Array(info.production).keys()];

    return (
        <>
            <div className="productive-unit">
                {
                    keys.map((item) => (
                        <Seed key={item}/>
                    ))
                }
            </div>
        </>
    )
}