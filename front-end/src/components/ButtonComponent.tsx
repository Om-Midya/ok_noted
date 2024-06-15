import {FunctionComponent} from "react";

interface ButtonComponentProps {
    text: string;
    color?: string;
    onClick?: () => void;
}

const ButtonComponent: FunctionComponent<ButtonComponentProps> = ({text, color, onClick}) => {

    switch (color) {
        case "blue":
            color = "bg-blue-400";
            break;
        case "green":
            color = "bg-green-400";
            break;
        case "red":
            color = "bg-red-400";
            break;
        case "gray":
            color = "bg-gray-400";
            break;
        default:
            color = "bg-blue-400";
            break;

    }
    return (
        <button className={`p-2 mt-2 ${color} rounded-[5px]`} onClick={onClick}>{text}</button>
    )
}

export default ButtonComponent
