import React, { useState } from 'react'

const Test = () => {
    const [prueba, setPrueba] = useState(false)

    const setToggle = () =>{
        setPrueba(!prueba)
    }

  return (
      <>
      <button onClick={setToggle}>toggle</button>
      { <p> {prueba ? "true" : "false"} </p> }

      </>
  )
}

export default Test
