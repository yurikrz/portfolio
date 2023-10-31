import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { links } from '../utils/data'

const NavBar = () => {
    const [isShowMenu, setIsShowMenu ] = useState(false)

    return (
        <div className="bg-black h-[72px] w-full px-5 flex items-center justify-between text-light_grey md:pl-[50px] md:pr-0 lg:pl-[72px]">
            <span className="font-great_vibes text-white text-3xl">Yurik R.</span>
            <ul className='hidden h-full justify-center items-center bg-level1 pr-[50px] md:grid md:grid-cols-[repeat(4,auto)] lg:pr-[72px]'>
                {
                    links.map(link => (
                        <li key={link.id} className='cursor-pointer capitalize text-base font-normal hover:scale-105 duration-200 px-[22px] h-full flex items-center hover:text-white hover:bg-purple '>{link.link}</li>
                    ))
                }
            </ul>
            <div className='cursor-pointer md:hidden' onClick={()=> setIsShowMenu(!isShowMenu)}>
                <FaBars className="text-2xl hover:text-white" size={30}/> 
            </div>
        </div>
    )
}

export default NavBar