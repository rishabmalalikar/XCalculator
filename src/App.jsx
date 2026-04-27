import { useState } from 'react'
import './App.css'

function App() {
  const [equation, setEquation] = useState("")
  const [result, setResult] = useState("")
  console.log(equation, result)


  return (
    <>
    <div className="calculator" style={{padding: "20px",display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>React Calculator</h1>
      <input type="text" value={equation} readOnly></input><br />
      {result && <div className="result" style={{color: "gray"}}>{result}</div>}
      <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", justifyItems: "center", marginTop: "20px"}}>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "7")}>7</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "8")}>8</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "9")}>9</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "+")}>+</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "4")}>4</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "5")}>5</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "6")}>6</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "-")}>-</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "1")}>1</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "2")}>2</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "3")}>3</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "*")}>*</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => {setEquation(""); setResult("");}}>C</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "0")}>0</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => {if (equation==="") setResult("Error"); else setResult(eval(equation))}}>=</button>
        <button style={{height: '9vh',width: '5vw', borderRadius:'20%'}} onClick={() => setEquation(equation + "/")}>/</button>
      </div>
    </div>
    </>
  )
}

export default App
