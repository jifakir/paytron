import React, { useState } from 'react';
import Portal from "@reach/portal";
import {SiGooglemybusiness} from 'react-icons/si';
import {RiSettings3Line, RiPercentFill} from 'react-icons/ri';
import {BiCalculator} from 'react-icons/bi';
import logo from './logo.png'
import './App.css'

function App() {

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="w-full bg-white shadow-md">
        <header className="container mx-auto flex justify-between h-16 text-md">
          <div className="flex h-full items-center">
            <div className="logo h-full">
              <img src={logo} alt="Logo" className="h-full" />
            </div>
            <ul className="text-gray-500 flex h-full items-center">
              <li className={`hover:text-blue-500 cursor-pointer mx-5 font-medium`}>Product</li>
              <li className={`hover:text-blue-500 cursor-pointer mx-5 font-medium`}>Who we server</li>
              <li className={`group relative hover:text-blue-500 cursor-pointer mx-5 font-medium h-full flex items-center`}>
                <a >Pricing</a>
                  <div className="absolute dropdown group-hover:block hidden  z-10 bg-white rounded p-3 shadow top-full w-96 text-gray-400">
                      <h3 className="pb-3 uppercase text-xs">Patron's Pricing</h3>
                      <ul className="grid grid-cols-2">
                        <li className="flex items-center pb-2">
                          <div className="px-2 text-blue-500"><SiGooglemybusiness /></div>
                          <h6 className="text-sm">Business Customers</h6>
                        </li>
                        <li className="flex items-center pb-2">
                          <div className="px-2 text-blue-500"><RiSettings3Line /></div>
                          <h6 className="text-sm">API Pricing</h6>
                        </li>
                        <li className="flex items-center pb-2">
                          <div className="px-2 text-blue-500"><BiCalculator /></div>
                          <h6 className="text-sm">Accountant's</h6>
                        </li>
                        <li className="flex items-center pb-2">
                          <div className="px-2 text-blue-500"><RiPercentFill /></div>
                          <h6 className="text-sm">Our Rates</h6>
                        </li>
                        
                      </ul>
                  </div>
              </li>
              <li className={`hover:text-blue-500 cursor-pointer mx-5 font-medium`}>Company</li>
              <li className={`hover:text-blue-500 cursor-pointer mx-5 font-medium`}>API</li>
              <li className={`hover:text-blue-500 cursor-pointer mx-5 font-medium`}>Resources</li>
            </ul>
          </div>
          <div className="flex items-center h-full">
            <button className="mx-5 text-md font-medium text-blue-500">Sign in</button>
            <button className="bg-blue-500 py-1 font-medium px-3 text-white rounded">Get started</button>
          </div>
        </header>
      </div>
    </div>
  )
}

export default App
