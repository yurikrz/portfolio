import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { links } from '../utils/data'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [isShowMenu, setIsShowMenu ] = useState(false)

    return (
        // <div className="bg-black h-[72px] w-full px-5 flex items-center justify-between text-light_grey md:pl-[50px] md:pr-0 lg:pl-[72px]">
        //     <span className="font-great_vibes text-white text-3xl">Yurik R.</span>
        //     <ul className='hidden h-full justify-center items-center bg-level1 pr-[50px] md:grid md:grid-cols-[repeat(4,auto)] lg:pr-[72px]'>
        //         {
        //             links.map(link => (
        //                 <li key={link.id} className='cursor-pointer capitalize text-base font-normal hover:scale-105 duration-200 px-[22px] h-full flex items-center hover:text-white hover:bg-purple '>{link.link}</li>
        //             ))
        //         }
        //     </ul>
        //     <div className='cursor-pointer md:hidden' onClick={()=> setIsShowMenu(!isShowMenu)}>
        //         <FaBars className="text-2xl hover:text-white" size={30}/> 
        //     </div>
        // </div>
        
        // <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed '> 
        //     <div>
        //         <h1 className='text-3xl font-great_vibes ml-2'>Yurik.R</h1>
        //     </div>
        //     <ul className='hidden md:flex'>
        //         {
        //             links.map(link => (
        //                 <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link.link}</li>
        //             ))
        //         }
        //     </ul>
            
        //     <div onClick={()=> setIsShowMenu(!isShowMenu)} 
        //         className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        //         {
        //            isShowMenu ? <FaTimes size={30}/> :  <FaBars size={30}/>
        //         }
        //     </div>
            
        //     {
        //         isShowMenu && (
        //             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        //                 {
        //                     links.map(link => (
        //                         <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link.link}</li>
        //                     ))
        //                 }       
        //             </ul>
        //         )
        //     }
        // </div>

        <div className='flex justify-between items-center w-full h-[88px] text-white bg-black fixed md:static md:pr-0 md:grid md:grid-cols-[37.5%,1fr]'> 
            <div>
                <h1 className='text-3xl font-great_vibes pl-5 md:pl-[50px] lg:pl-[72px]'>Yurik.R</h1>
            </div>
            
            <ul className='hidden md:flex bg-level1 pr-[50px] lg:pr-[72px] md:justify-end md:items-center h-full text-lg lg:text-xl'>
                {
                    links.map(link => (
                        <li 
                            key={link.id} 
                            className='cursor-pointer capitalize h-full font-medium text-gray-500 hover:scale-105 duration-200 px-[22px] hover:text-white hover:bg-purple flex justify-center items-center'
                        >
                            <span>
                                <Link 
                                    to={link.link}
                                    spy 
                                    smooth 
                                    duration={500}
                                >
                                    {link.link}
                                </Link>
                            </span>
                        </li>
                    ))
                }
            </ul>
            
            <div onClick={()=> setIsShowMenu(!isShowMenu)} 
                className='cursor-pointer pr-5 z-10 text-gray-500 md:hidden hover:text-violet-500 transition-all hover:scale-105'>
                {
                   isShowMenu ? <FaTimes size={30}/> :  <FaBars size={30}/>
                }
            </div>
            
            {
                isShowMenu && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {
                            links.map(link => (
                                <li 
                                    key={link.id} 
                                    className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-violet-500 transition-all hover:scale-105'
                                >
                                    <Link 
                                        onClick={()=>setIsShowMenu(!isShowMenu)}
                                        to={link.link}
                                        spy 
                                        smooth 
                                        duration={500}
                                    >
                                        {link.link}
                                    </Link>
                                </li>
                            ))
                        }       
                    </ul>
                )
            }
        </div>
    )
}

export default NavBar