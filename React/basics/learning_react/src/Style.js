import React from 'react'
import './custom.css'
function Style(props) {
    const h2 = { // inline style
        color: 'green',
        fontSize:'36px'
    }

  return (
    <div>
    <h1 className='header'>Style</h1>
    <h2 style={h2}>React inline style</h2>
    <h3 style={props.data== 'apply'? h2:""}> conditoinal style</h3>
    </div>
  )
}

export default Style