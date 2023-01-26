import React from 'react'
import { RiFileList3Line } from 'react-icons/ri'
import { RxTimer } from 'react-icons/rx'

function Cards() {
    return (
        <div class="pl-7 mt-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 scrollbar-hide">
            <div class="w-64 mb-10  m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://blog.webhopers.com/wp-content/uploads/2022/05/Web-Design-Company-in-Salem.jpg" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-green-600 rounded-full"></span>DRAFT
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>XYZ</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 1</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 13</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Marketing</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://img.jakpost.net/c/2019/03/05/2019_03_05_66942_1551784203._large.jpg" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-gray-600 rounded-full"></span>ARCHIVED
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>Sales vs marketing</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 3</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 25</p>
                    </div>
                    <div className='flex gap-2'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Marketing</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://www.ponyex.com/wp-content/webpc-passthru.php?src=https://www.ponyex.com/wp-content/uploads/2022/06/0606518_IMAGE.jpg&nocache=1" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>LIVE
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>How to Unclog a sink</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 6</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 15</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://img.jakpost.net/c/2019/03/05/2019_03_05_66942_1551784203._large.jpg" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>LIVE
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>How Googlre Analytics Ruined Marketing</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 3</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 25</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://img.freepik.com/premium-photo/purse-with-money-notepad-calculator-charts_547271-136.jpg" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>LIVE
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>Social Media Marketing 101</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 3</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 25</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10  m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://images.unsplash.com/photo-1611079830522-dc0c6e5f85ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>LIVE
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>Compliance Training</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 2</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 15</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                    </div>
                </div>
            </div>
            <div class="w-64 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img class="w-full" src="https://cdn2.hubspot.net/hubfs/53/focus-group-questions.jpg" alt="" />
                <div class="absolute top-0 right-0 bg-opacity-100 bg-gray-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">
                    <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>LIVE
                </div>
                <div class="p-4 text-gray-800">
                    <p className='font-bold ml-1'>Tips tricks ro Bargaining</p>
                    <p className='font-normal text-gray-400 pt-3 ml-1'>Last updated: 4/08/22</p>
                    <div className='flex gap-4 pt-3 pb-3'>
                        <p className='flex font-normal text-xs text-gray-400'><RiFileList3Line className='mt-0.5 mx-1' size={14} />Lessons: 2</p>
                        <p className='flex font-normal text-xs text-gray-400'><RxTimer className='mt-0.5 mx-1' size={14} />Minutes: 45</p>
                    </div>
                    <div className='flex'>
                        <span class="bg-gray-200 text-gray-500 rounded-xl mt-2 ml-1 px-2 py-1 text-xs font-bold cursor-pointer">Sales</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cards