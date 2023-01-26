import React from 'react'
import './NavBar.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Navbar() {
    return (
        <div className="flex sm:items-center sm:justify-between bg-white h-16 w-full shadow-2xl border-2">
            <div className="logo hidden sm:block">
                <h1 className="text-black ml-4 pl-10 cursor-pointer text-2xl">KNOWLEDGE</h1>
            </div>
            <div className="flex justify-between sm:justify-end w-full sm:w-auto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mt-1 h-10 rounded border-black border-2">
                    CREATE COURSE
                </button>
                <div className="flex flex-wrap justify-center">
                    <div className="px-4">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-12 align-middle border-none" />
                    </div>
                    <BsThreeDotsVertical size={25} className="mt-3" />
                </div>
            </div>
        </div>
    )
}

export default Navbar