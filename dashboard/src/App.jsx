import React,{ useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
      <MyContetext.Provider value ={value}>
        <section className= "main flex">
          <div className = "sidebarWrapper w-[20%]">
            <Sidebar />
          </div>

          <div>
            <Routes className = "content_Right w-[80%]">
              <Route path = "/" exact ={true} element = {<Dashboard />} />
            </Routes>
          </div>
        </section>
      </MyContetext.Provider>
    </BrowserRouter> */}

    < Header />
    <div className="w-screen flex items-center ">
    < Sidebar/>
    < Dashboard />
    </div>
    </>
  )
}

export default App
