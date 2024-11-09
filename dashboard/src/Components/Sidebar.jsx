import React,{ useState, useEffect, Children } from 'react'
import {ChevronFirst} from 'lucide-react'

const children = [{title:"Dashboard"}, {title:"Inbox"}, {title:"Project Status"}]

function Sidebar() {
  return (
    <div className= "w-1/5 h-screen bg-cyan-800 relative">
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-white pl-14">SideNav</h1>
          {/* <button className="p-1.5 rounded-lg bg-cyan-800 hover:bg-cyan-900">
            <ChevronFirst />
          </button> */}
        </div>
        <ul className="text-2xl font-semibold text-white py-6 px-4 ">
          {children.map((child, index)=>
          <li key = {index} className="py-2 cursor-pointer hover:bg-cyan-900 px-2" >
            {child.title}
          </li>
          )}</ul>
      </nav>
    </div>
  )
}

export default Sidebar;