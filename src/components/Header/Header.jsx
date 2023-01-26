import React from 'react'

function Header() {
    return (
        <>
            <div className="flex justify-between flex-wrap pl-10 pt-5">
                <div className="flex flex-wrap sm:flex-row items-center justify-center">
                    <button className=" px-6 block hover:text-blue-500 focus:outline-none text-black border-b-2 font-medium border-black">
                        ALL
                    </button>
                    <button className=" px-6 block hover:text-blue-500 focus:outline-none text-black font-medium">
                        LIVE
                    </button>
                    <button className=" px-6 block hover:text-blue-500 focus:outline-none text-black font-medium">
                        DRAFT
                    </button>
                    <button className=" px-6 block hover:text-blue-500 focus:outline-none text-black  font-medium">
                        ARCHIVED
                    </button>
                </div>
                {/* dropdown */}
                <div className="max-w-2xl mr-10">
                    <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2 dark:bg-white dark:placeholder-white dark:text-black">
                        <option defaultValue="select">Select team</option>
                        <option value="sample1">sample 1</option>
                        <option value="sample2">sample 2</option>
                    </select>
                </div>
            </div>

        </>

    )
}

export default Header