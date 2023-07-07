import React, { useState } from 'react';
;

const SelectButton = () => {

  return (

    <div className='w-full flex items-center justify-center mb-14'>
      <div className='w-1/2 flex items-center justify-around flex-wrap'>
        <div className="relative max-w-xs mx-auto mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <select  className="w-full p-2.5 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 text-center  shadow-cyan-600  ">
            <option disabled selected>Skills</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
          </select>
        </div>
        <div className="relative max-w-xs mx-auto mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 text-center  shadow-cyan-600">
            <option disabled selected>Rating</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
          </select>
        </div>
        <div className="relative max-w-xs mx-auto mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 text-center  shadow-cyan-600  ">
            <option disabled selected>Price</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
          </select>
        </div>

      </div>
    </div>


  )
}

export default SelectButton




