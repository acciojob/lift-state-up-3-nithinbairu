import React from 'react'

function ChildComponent2({ handleOptionChange }) {
  return (
    <div style={{backgroundColor:"orange"}}>
        <h3>Child Component 2</h3>
        <button onClick={() => handleOptionChange("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2