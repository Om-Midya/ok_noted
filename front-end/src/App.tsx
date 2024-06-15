import './App.css'
import NoteItem from "./components/NoteItem.tsx";
import {ChangeEventHandler, useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [notes, setNotes] = useState<{
        id: string,
        title: string,
        content?: string
    }[]>([]) // [{}, {}, {}]

    useEffect(()=>{
        // fetch notes from the server
        const fetchNotes = async()=>
        {
            const response = await axios.get("http://localhost:8000/")
            setNotes(response.data.notes)
        }
        fetchNotes()
    },[])


    const[values, setValues] = useState({
        title: "",
        content: ""
    })

    const [selectedNoteId, setSelectedNoteId] = useState("")

    // little complex function to handle input changes, but better data handling
    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}/*destructured e.target from e*/) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-5 my-5 space-y-4">
                <h1 className={"font-semi-bold text-5xl text-center"}>OK Noted!</h1>
                <form onSubmit={async (e)=>{
                    e.preventDefault()

                    if(selectedNoteId){
                        const response = await axios.patch(`http://localhost:8000/${selectedNoteId}`,
                            {
                                title: values.title,
                                content: values.content
                            })

                        console.log(response.data.note)

                        const updatedNotes = notes.map((note)=> {
                            if(note.id === selectedNoteId){
                                note.title = response.data.note.title
                                note.content = response.data.note.content
                            }
                            return note
                        })
                        setNotes([...updatedNotes])
                        setValues({title: "", content: ""})
                        setSelectedNoteId("")
                        return
                    }
                    const response = await axios.post("http://localhost:8000/",
                        {
                            title: values.title,
                            content: values.content
                        })
                    setNotes([response.data.note,...notes])
                    setValues({title: "", content: ""})
                    console.log(response.data)
                }}>
                    <div>
                        {values.title.replace(/\s/g, '').length < 3 ?
                            <p className={"text-red-500"}>Title must be at least 3 characters</p> : null}
                        <input
                            type={"text"}
                            placeholder={"Title"}
                            className={"w-full border-b-2 border-gray-700 outline-none"}
                            value={values.title}
                            name={"title"}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                      <textarea
                          placeholder={"Content"}
                          className={"w-full border-b-2 border-gray-700 outline-none resize-none h-20"}
                          value={values.content}
                          name={"content"}
                          onChange={handleChange}
                      />
                    </div>
                    <div className={"text-right"}>
                        <button className={"p-2 bg-blue-400 rounded-[5px]"}  type="submit">Submit</button>
                    </div>
                </form>

                {notes.map((note)=>{
                    return <NoteItem
                        key={note.id}
                        title={note.title}
                        onEditClick={()=>{
                            setSelectedNoteId(note.id)
                            setValues({
                                title: note.title,
                                content: note.content || ""
                            })
                        }}
                    />
                })}
            </div>
        </>
    )
}

export default App
