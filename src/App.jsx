import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeView from './HomeView'
import CountryInfo from './CountryInfo'
function App() {
  return (
    <div className='text-center'>
      <header className='bg-success p-2 text-light'>
        <h1>Countries App</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/CountryInfo/:id" element={<CountryInfo />} />
      </Routes>
    </div>
  )
}

export default App