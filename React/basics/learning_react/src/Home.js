import React from 'react'

function Home() {

    const getalert = ()=>{
        alert(" yeah boi onclick working")
    }

  return (
    <div onClick={getalert}>  this is home </div>
  )
}

export default Home