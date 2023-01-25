import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Leftbar() {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "DASHBOARD", link: '/usermanagement', icon: AiOutlineUsergroupAdd },
        { name: "KNOWLEDGE", link: '/reportpost', icon: AiOutlineUsergroupAdd },
        { name: "MEMBERS", link: '/reportpost', icon: AiOutlineUsergroupAdd },
        { name: "TEAMS", link: '/reportpost', icon: AiOutlineUsergroupAdd },
        { name: "VAULT", link: '/reportpost', icon: AiOutlineUsergroupAdd },
        { name: "CHAT", link: '/reportpost', icon: AiOutlineUsergroupAdd },

    ];

    return (
        <section className={`flex gap-6 ${open ? 'w-64' : 'w-10'}`}>
            <div className={`bg-[#000000] min-h-screen fixed ${open ? 'w-64' : 'w-10'}
        duration-500 text-gray-100 px-4`}>

                <div className='py-3 flex justify-end'>
                    <HiMenuAlt2
                        size={26} className="cursor-pointer"
                        onClick={() => setOpen(!open)} />
                </div>

                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            onClick={menu?.action}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 
                         rounded-md`}>

                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    } `}>
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                            rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                            group-hover:py-1 group-hover:left-14 group-hover:duration-300 
                            group-hover:w-fit`}>
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leftbar