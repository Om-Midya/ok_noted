import './App.css'
import NoteItem from "./components/NoteItem.tsx";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    return (
        <>
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-5 my-5 space-y-4">
              <h1 className={"font-semi-bold text-5xl text-center"}>OK Noted!</h1>
              <div>
                  {title.replace(/\s/g, '').length < 3? <p className={"text-red-500"}>Title must be at least 3 characters</p> : null}
                  <input
                      type={"text"}
                      placeholder={"Title"}
                      className={"w-full border-b-2 border-gray-700 outline-none"}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                  />
              </div>
              <div>
                  <textarea
                      placeholder={"Content"}
                      className={"w-full border-b-2 border-gray-700 outline-none resize-none h-20"}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                  />
              </div>
              <div className={"text-right"}>
                  <button className={"p-2 bg-blue-400 rounded-[5px]"} onClick={()=>{
                        console.log("Title: ", title)
                        console.log("Content: ", content)
                  }}>Submit</button>
              </div>

              <NoteItem title="Namaste React"/>
              <NoteItem title="Hello World"/>
              <NoteItem title="Why is sourashis a Nigga" content="Because he is blackie"/>
          </div>
        </>
  )
}

export default App
