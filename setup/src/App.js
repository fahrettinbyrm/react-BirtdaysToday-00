import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birtdays Today</h3>
        <List people={people} />
        <button className='btn' onClick={() => setPeople([])}>
          All Clear Items
        </button>
        <button className='btn' onClick={() => setPeople(data)}>
          Refresh
        </button>
      </section>
    </main>
  )
}

export default App
