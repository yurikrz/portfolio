// import { useState } from "react"
// import NavBar from "../components/NavBar"
// import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, SkillSetIcon } from "./icons/Svgs"
// import { projects,} from "../utils/data"
// import {FaBars, FaTimes} from 'react-icons/fa'
// import SocialLink from "./SocialLink"
// import NavBar from "./NavBar"

const Home = () => {
    // const [isShowMenu, setIsShowMenu ] = useState(false)

    return (
        <section name='home' className="w-full grid md:grid-cols-[45%,1fr] ">
            <div className="w-full md:pt-9 md:pb-32">
                <img className='w-full md:w-[850px] md:[transform:_translate(65px,0px)]' src="/images/foto.png" alt="" />
            </div>

            <div className="text-white bg-level1 py-12 px-5 md:pt-9 md:pb-28 flex justify-center flex-col gap-4 md:gap-8 items-center ">
                <h2 className="text-3xl font-bold md:text-5xl md:[line-height:_normal] z-10">I’m Yurik Rivera a full stack developer <span className="text-slate-500">based in Nicaragua.</span></h2>
                <p className="text-lg z-10">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            </div>

            {/* <div className="bg-black h-[72px] w-full px-5 flex items-center justify-between text-light_grey md:pl-[50px] md:pr-0 lg:pl-[72px]">
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
            </div> */}

            {/* <section className="top" id="about">
                <img 
                    className="top__img" 
                    src="/images/foto.png" 
                    srcSet="/images/foto.png 384w,/images/foto.png 750w" 
                    sizes="(max-width:700px) 768px, 
                        (max-width:768px) 384px, 
                        (max-width:992px) 500px, 
                        (max-width:1200px) 768px, 
                        (max-width:1330px) 768px, 768px" 
                    alt="photo designer"/>
                <div className="top__desc">
                    <h1 className="top__title">
                        I’m Robin Williams.<br/>
                        A Product Designer<br/>
                        <span>based in Italy.</span>
                    </h1>
                    <p className="top__text">
                        I’m probably the most passionate designer you will ever get to work
                        with. If you have a great project that needs some amazing skills, I’m
                        your guy.
                    </p>
                </div>
            </section> */}

        {/* <header className="w-full md:grid md:grid-cols-[37.5%,1fr] ">
                <div className="bg-black w-full grid ">
                    <div className="h-[88px] w-full px-5 flex items-center justify-between md:pl-[50px] lg:pl-[72px] fixed bg-black md:static">
                        <span className="font-great_vibes text-white text-3xl">Yurik.R</span>
                        
                        <div className='cursor-pointer z-10 md:hidden' onClick={()=> setIsShowMenu(!isShowMenu)}>
                            {
                                isShowMenu ? <FaTimes className="text-red-600 text-2xl hover:text-white" size={30}/> : <FaBars className="text-light_grey text-2xl hover:text-white" size={30}/> 
                            }
                        </div>
                    </div>
                    
                    <div className="w-full ">
                        <img className='w-full object-cover object-center' src="/images/foto.png" alt="" />
                    </div>
                    
                    {
                        isShowMenu && (
                            
                            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800">
                                {
                                    links.map(link => (
                                        <li key={link.id} className='px-4 py-6 cursor-pointer capitalize text-4xl font-normal hover:scale-105 duration-200'>{link.link}</li>
                                    ))
                                }
                            </ul> 
                        )
                    }
                </div> */}
                
                {/* sm:relative */}
                {/* sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-[15%] sm:gap-8 */}
                {/* <div className="text-white bg-level1 ">
                    <ul className='hidden h-[88px] justify-end items-center bg-level1 pr-[50px] md:grid md:grid-cols-[repeat(4,auto)] lg:pr-[72px]'>
                        {
                            links.map(link => (
                                <li key={link.id} className='cursor-pointer capitalize text-base font-normal hover:scale-105 duration-200 px-[22px] h-full flex items-center hover:text-white hover:bg-purple '>{link.link}</li>
                            ))
                        }
                    </ul>
                    <div className="bg-transparent py-12 px-5 grid gap-4 ">
                        <h2 className="text-3xl font-bold md:text-[76px] md:[line-height:_normal]">I’m Yurik Rivera a full stack developer <span className="text-slate-500">based in Nicaragua.</span></h2>
                        <p className="text-lg">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                    </div>
                </div> 
            </header> */}


            {/* 

            

            
            
            

            
            
            

            <footer>
                <div>
                    <span className="font-great_vibes text-white text-3xl">Yurik R.</span>

                </div>
                
            </footer>
             */}
        </section>
    )
}

export default Home