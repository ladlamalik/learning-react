import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 tex-black rounded-xl p-4 mb-4">
        Tailwind test
      </h1>
      <div className="flex">
        <Card username="Nadeem" btnText="Click me" />
        <Card username="Chai Aur React" btnText="Visit me" />
        <Card username="NextJs" btnText="About me" />
      </div>
    </>
  );
}

export default App
