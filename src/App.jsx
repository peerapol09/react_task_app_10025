import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './screens/Home.jsx'
import AddTask from './screens/AddTask.jsx'
import UpdateTask from './screens/UpdateTask.jsx'
import Showalltask from './screens/Showalltask.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/updateTask" element={<UpdateTask />} />
        <Route path="/showalltask/id" element={<Showalltask />} />
      </Routes>
    </BrowserRouter>
  )
}

