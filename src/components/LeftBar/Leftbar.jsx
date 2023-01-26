import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { SlGraduation } from 'react-icons/sl'
import { BsDiamond, BsChatLeftText } from 'react-icons/bs'
import { VscFileSymlinkDirectory } from 'react-icons/vsc'
import { HiRss } from 'react-icons/hi2'
import { RiCopyrightLine } from 'react-icons/ri'
import Menus from './Menus'

function Leftbar() {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "DASHBOARD", link: '#', icon: BiHomeAlt },
        { name: "KNOWLEDGE", link: '#', icon: SlGraduation},
        { name: "MEMBERS", link: '#', icon: AiOutlineUsergroupAdd },
        { name: "TEAMS", link: '#', icon: BsDiamond },
        { name: "VAULT", link: '#', icon: VscFileSymlinkDirectory },
        { name: "CHAT", link: '#', icon: BsChatLeftText },
    ];

    const bottomMenu = [
        { name: "SETTINGS", link: '#', icon: BiHomeAlt },
        { name: "COMPANY", link: '#', icon: SlGraduation },
        { name: "MY PROFILE", link: '#', icon: AiOutlineUsergroupAdd },
    ]

    return (
        <section className={`flex gap-6 ${open ? 'w-64' : 'w-10'} `}>
            <div className={`bg-[#000000] min-h-screen fixed ${open ? 'w-64' : 'w-16'}
        duration-500 text-gray-100 px-4`}>
                <div className='py-3 flex justify-end'>
                    {open ?
                        <div className='text-white mr-12  text-md relative'>
                            <HiRss className='text-white  absolute bottom-2/4 ml-1' size={18} fontWeight={20} />
                            <p className='flex font-extrabold text-white'>Remote SalesFuel</p>
                        </div>
                        : ""}
                    <HiMenuAlt2
                        size={26} className="cursor-pointer"
                        onClick={() => setOpen(!open)} />
                </div>
                <Menus menus={menus} open={open} />
                <div className='mt-44'>
                    <Menus menus={bottomMenu} open={open} />
                </div>
                <hr className="border-gray-600" />
                {open ?
                    <div className='flex gap-6 mt-5'>
                        <p className='text-xs'>Powered By</p>
                        <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-mono bg-blue-600 text-white rounded-full w-4 h-4 text-sm pr-4 pb-4"><RiCopyrightLine /></span>
                        <p className='text-gray-500 text-xs'>TeamJeenyus </p>
                    </div>
                    :
                    <span className="inline-block py-1 px-1.5 mt-4 leading-none text-center whitespace-nowrap align-baseline font-mono bg-blue-600 text-white rounded-full w-4 h-4 text-sm pr-4 pb-4"><RiCopyrightLine /></span>}
            </div>
        </section>
    )
}

export default Leftbar