import React from 'react'
import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import Leftbar from '../LeftBar/Leftbar'
import NavBar from '../NavBar/Navbar'

function Home() {
    return (
        <div className=' max-h-screen'>
            <div className='flex max-w-[100%]'>
                <div className=' hidden md:block max-w-[100%] '>
                    <Leftbar />
                </div>
                <div className='w-full flex-row justify-center max-w-[100%]'>
                    <NavBar />
                    <div className='bg-gray-50'>
                        <Header />
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home