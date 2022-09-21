import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
function App() {

  return (
    <div className="App">
      <TopBar/>
      <div className="flex-row">
        <SideBar/>

      </div>
    </div>
  )
}

export default App
