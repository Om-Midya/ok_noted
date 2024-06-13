import './App.css'

function App() {

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-5 my-5 space-y-4">
          <h1 className={"font-semi-bold text-5xl text-center"}>OK Noted!</h1>
          <div>
              <input type={"text"} placeholder={"Title"} className={"w-full border-b-2 border-gray-700 outline-none"}/>
          </div>
          <div>
              <textarea placeholder={"Content"} className={"w-full border-b-2 border-gray-700 outline-none resize-none h-20"}/>
          </div>
          <div className={"text-right"}>
              <button className={"p-2 bg-blue-400 rounded-[5px]"}>Submit</button>
          </div>

          <div className={"max-w-3xl mx-auto bg-white shadow-lg rounded p-5 my-5 space-y-4 border-2"}>
              <h1>Note 1 Heading</h1>
              <div className={"flex space-x-2"}>
                  <button className={"bg-green-300 p-2 rounded-[5px]"}>View</button>
                  <button className={"bg-gray-300 p-2 rounded-[5px]"}>Edit</button>
                  <button className={"bg-red-300 p-2 rounded-[5px]"}>Delete</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
