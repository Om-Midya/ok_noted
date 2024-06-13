import './App.css'

function App() {

  return (
    <>
      <div className="container">
          <h1 className={"heading"}>OK Noted!</h1>
          <div>
              <input type={"text"} placeholder={"Title"} className={"input"}/>
          </div>
          <div>
              <textarea placeholder={"Content"} className={"content"}/>
          </div>
      </div>
    </>
  )
}

export default App
