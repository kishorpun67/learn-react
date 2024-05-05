import './App.css'
import Test from './Test'


function App() {
  const name = "kishor pun"
  return (
    <>
      <h1>hellow world {name}</h1>
      <Test props={name} />
    </>
   
  )
}

export default App
