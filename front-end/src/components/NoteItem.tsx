import {FC} from "react";
import ButtonComponent from "./ButtonComponent.tsx";

interface NoteItemProps {
    title: string;
    content?: string;
}

const NoteItem: FC<NoteItemProps> = ({title,content}) => {
    return (
        <div className={"max-w-3xl mx-auto bg-white shadow-lg rounded p-5 my-5 space-y-4 border-2"}>
            <h1 className={"text-l font-semibold"}>{title}</h1>
            <div className={"flex flex-wrap space-x-2"}>
                <ButtonComponent
                    text="View"
                    onClick={()=>{console.log("Viewing note")}}
                    color = 'gray'
                />
                <ButtonComponent
                    text="Edit"
                    onClick={()=>{console.log("Editing note")}}
                    color = 'green'
                />
                <ButtonComponent
                    text="Delete"
                    onClick={()=>{console.log("Deleting note")}}
                    color = 'red'
                />

            </div>
        </div>
    )
}

export default NoteItem