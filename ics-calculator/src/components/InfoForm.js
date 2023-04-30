import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client';
import Answer from './answer'

 export default function InfoForm() {
  const [inputs, setInputs] = useState({});
  const [boxes, setBoxes] = useState('____');
  const [result, setResult] = useState('____');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let finalArea = parseFloat(inputs.area) + (parseFloat(inputs.area) * (parseFloat(inputs.percent) / 100))
    let totalBox = Math.ceil(finalArea / inputs.m2)
    let totalpieces = totalBox * inputs.pieces
    let amount = totalpieces * inputs.price

    setBoxes(totalBox)
    setResult(amount)
  }

  return (
    <div style={{justifyContent: "center", alignItems: "center"}}>
      <form onSubmit={handleSubmit}>
        <div style={{padding: "1rem"}}>
          <label>โปรดกรอกพื้นที่ทั้งหมด :
          <input 
            type="number" 
            name="area" 
            value={inputs.area || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <div style={{padding: "1rem"}}>
          <label>โปรดกรอก % พื้นที่ที่ต้องการเผื่อ :
          <input 
            type="number" 
            name="percent" 
            value={inputs.percent || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <div style={{padding: "1rem"}}>
          <label>โปรดกรอก "จำนวนตารางเมตรต่อกล่อง" :
          <input 
            type="number" 
            name="m2" 
            value={inputs.m2 || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <div style={{padding: "1rem"}}>
          <label>โปรดกรอก "จำนวนแผ่นต่อกล่อง" :
          <input 
            type="number" 
            name="pieces" 
            value={inputs.pieces || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <div style={{padding: "1rem"}}>
          <label>โปรดกรอก "ราคาต่อแผ่น" :
          <input 
            type="number" 
            name="price" 
            value={inputs.price || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <input style={{width: "10rem", fontSize: "5rem", margin: "2rem"}} type="submit" value="Calculate" />
      </form>
      <Answer result={result} boxes={boxes}/>
    </div>
  )
}