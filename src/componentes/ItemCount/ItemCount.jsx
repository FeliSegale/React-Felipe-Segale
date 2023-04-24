
import React, { useState } from 'react'

const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    let handleCount = () =>{
        setCounter(counter + 1)
    }
    return(
        <div>
        <p>Contador</p>
        <p> {counter} </p>
        <button onClick={handleCount} className='btn btn-outline-dark'>+1</button>
        </div>
    )
    }


export default ItemCount


