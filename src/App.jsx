import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowAllTask from '././screens/ShowAllTask.jsx'
import AddTask from './screens/AddTask.jsx'
import UpdateTask from './screens/UpdateTask.jsx'
import Home from './screens/Home.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showalltask" element={<ShowAllTask/>} />
          <Route path="/addtask" element={<AddTask/>} />
          <Route path="/updatetask/:id" element={<UpdateTask/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
