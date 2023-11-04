import { useState } from 'react'
import './App.css'
import Layout from './component/Layout'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Allusers from './pages/Allusers';
import Adduser from './pages/Adduser';
import Updateuser from './pages/Updateuser';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Allusers />} />
        <Route path="/add-user" element={<Adduser/>}/>
        <Route path="/update-user/:id" element={<Updateuser/>}/>
      </Routes>
      </BrowserRouter>
      
      </Layout>
    
      </>
  )
}

export default App