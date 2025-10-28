import React from 'react'

function ChildComponent1({ handleOptionChange }) {
  return (
    <div style={{backgroundColor:"orange"}}>
        <h3>Child Component 1</h3>
        <button onClick={() => handleOptionChange("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1