import {useState} from 'react'

function Test({name}) {
  const [num, setNum] =useState(0)


  const addValue = () => {
    setNum(num+1)
  };
  const decreaseValue = () => {
    setNum(num-1)
  };
  return (
    <>
      <div>Test {name}</div>
      <h1>Counting {num}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>

    
  )
}

export default Test
