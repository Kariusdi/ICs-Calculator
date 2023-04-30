import React, {useState, useEffect} from "react"

 export default function Answer({result, boxes}) {

  return (
    <div>
        <h2>ต้องใช้ทั้งหมด {boxes} กล่อง</h2>
        <h2>ราคาสุทธิ {result} บาท</h2>
    </div>
  )
}

