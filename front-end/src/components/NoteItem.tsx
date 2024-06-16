import {FC, useState} from "react";
import ButtonComponent from "./ButtonComponent.tsx";

interface NoteItemProps {
    title: string;
    content?: string;
    onEditClick?: ()=>void;
    onDeleteClick?: ()=>void;
    onViewClick?: ()=>void;
}

const NoteItem: FC<NoteItemProps> = ({title,content, onEditClick, onDeleteClick, onViewClick}) => {
    const [showContent, setShowContent] = useState(false)
    return (
        <div className={"max-w-3xl mx-auto bg-white shadow-lg rounded p-5 my-5 space-y-4 border-2"}>
            <h1 className={"text-l font-semibold"}>{title}</h1>
            {showContent ? <p>{content}</p> : null}
            <div className={"flex flex-wrap space-x-2"}>
                <ButtonComponent
                    text={showContent ? "Hide" : "View"}
                    onClick={()=>{
                        setShowContent(!showContent)
                        if(onViewClick){
                            onViewClick()
                        }
                    }}
                    color = 'gray'
                />
                <ButtonComponent
                    text="Edit"
                    color = 'green'
                    onClick={onEditClick}
                />
                <ButtonComponent
                    text="Delete"
                    onClick={onDeleteClick}
                    color = 'red'
                />

            </div>
        </div>
    )
}

export default NoteItem
