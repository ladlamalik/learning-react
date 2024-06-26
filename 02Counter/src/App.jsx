import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 5
  
  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
 

  const removeValue = () => {
    setCounter(counter - 1);
  }

  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} disabled={counter >= 20}>
        Add Value
      </button>{' '}
      <button onClick={removeValue} disabled={counter <= 0}>
        Remove Value
      </button>
    </>
  );
}

export default App
