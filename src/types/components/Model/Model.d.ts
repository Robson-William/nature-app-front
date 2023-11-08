import "./style.css";
type Hortalica = {
    name: string;
    unit: string;
    distLine: number;
    distSeed: number;
    unitArea: number;
    growingDays: number;
    seedlingsFirstPlanting: number;
    unitsProduced: number;
    unitsNeedToSell: number;
};
type Measures = {
    width: number;
    height: number;
    area: number;
    freeSpace: number;
    productiveUnit: number;
    hortalica: Hortalica;
    production: number;
};
type Props = {
    info: Measures;
};
export default function Model({ info }: Props): import("react/jsx-runtime").JSX.Element;
export {};
