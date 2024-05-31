import React,{useState} from 'react'

function Test01() {
    const [value, setValue] = useState(1)
    const [object, setObject] = useState({value:2})
    console.log('type', typeof(object.value))
    let multipliedValue = 5 * value
    const mulitply = (val) => {
        console.log('parameter', val)
        setValue(value *5)
        console.log('inner',multipliedValue)
    }
    console.log('outer',multipliedValue)

  return (
    <div>
        <h2>Value count: {value}</h2>
        <button type="button" onClick={()=>mulitply(5)}>Increment</button>
        <h3>mutliped value : {multipliedValue}</h3>
    </div>
    
  )
}

export default Test01