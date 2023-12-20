import { useState, useEffect } from 'react';

import React from 'react'

const Contador = () => {

    const [contador, setContador] = useState (1)
    useEffect (()=> {
        document.title = `Contador: ${contador}`;
    },[contador])

    const sumarContador = () => {
        setContador (contador + 1);
    }

    const restarContador = () => {
        setContador (contador - 1);
    }

  return (
    <div>
        <button onClick = {restarContador}> - </button>
        <p>{contador}</p>
        <button onClick = {sumarContador}> + </button>

    </div>
  )
}

export default Contador