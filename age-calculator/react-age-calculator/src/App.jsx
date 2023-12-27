import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateForm from './DateForm.jsx'

function App() {
    const [age, setAge] = useState({ days: "--", months: "--", years: "--"});

  return (
    <>
      <main>
        <DateForm submitAge={setAge} />
        <hr />
        <p><span className="years">{age.years}</span> years</p>
        <p><span className="months">{age.months}</span> months</p>
        <p><span className="days">{age.days}</span> days</p>
      </main>
    </>
  )
}

export default App
