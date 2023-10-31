import NavBar from "../components/NavBar"
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, SkillSetIcon } from "../components/icons/Svgs"
import { projects, skillset, works } from "../utils/data"

const Home = () => {

    return (
    <main className="max-w-[1440px] h-full bg-black mx-auto font-sen ">
        <NavBar/>
        <section className="w-full md:flex ">
            <div className="w-full md:min-w-[500px] lg:min-w-[750px] lg:min-h-[650px]">
                <img className='w-full ' src="/images/foto.png" alt="" />
            </div>
            {/* sm:relative */}
            {/* sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-[15%] sm:gap-8 */}
            <div className="text-white bg-level1 ">
                <div className="bg-transparent py-12 px-5 grid gap-4 ">
                    <h2 className="text-3xl font-bold md:text-[76px] md:[line-height:_normal]">I’m Yurik Rivera a full stack developer <span className="text-slate-500">based in Nicaragua.</span></h2>
                    <p className="text-lg">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                </div>
            </div>
        </section>
        <section className="w-full px-5 py-16">
            <h3 className="text-lg font-bold uppercase text-light_grey">Work Experience</h3>
            <p className="text-white text-2xl font-bold">Companies I have worked for in the past.</p>
            <ul className="text-white pt-10 grid gap-10">
                {
                    works.map(work => 
                        (
                            <li key={work.id} className="grid gap-2">
                                <h3 className="text-9xl font-normal text-light_grey">{work.id}</h3>
                                <p className="text-2xl font-bold "><span  style={{color: work.color}}>{work.company}</span>, {work.work}</p>
                                <p className="text-lg font-normal">{work.description}</p>
                            </li>
                        )
                    )
                }
                
            </ul>
        </section>

        <section className="grid">
            <div className="px-5 bg-peach py-10">
                <h3 className="text-3xl font-bold text-level1 pb-4">Philosophy & values</h3>
                <p className="text-lg font-normal text-dark_grey pb-10">I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                <a className='text-black border-b border-b-dark_grey pb-2' href="https://www.linkedin.com/in/yurik-rivera-zeled%C3%B3n-066726237/">Check my Linkedin</a>
            </div>
            <div className="w-full">
               <img className='w-full object-cover object-center' src="/images/foto2.png" alt="" />
            </div>
        </section>

        <section className="py-10 px-5 grid gap-4">
            <h3 className="text-3xl text-white font-bold">Skillset</h3>
            <p className="text-lg text-light_grey font-normal">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
            <ul className="py-6 grid gap-7">
                {
                    skillset.map(skill => (
                        <li className='grid gap-3' key={skill.id}>
                            <SkillSetIcon/>
                            <h4 className="text-2xl text-white font-bold">{skill.skillSetName}</h4>
                            <ul className="text-base text-light_grey font-normal">
                                {
                                    skill.skillSetIems.map((item, index) => (
                                        <li key={index}>{item}</li>     
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
        
        <section className="grid grid-cols-[repeat(auto-fit,_180px)] justify-center">
            <Icon1/>
            <Icon2/>
            <Icon3/>
            <Icon4/>
            <Icon5/>
            <Icon6/>
        </section>

        <section className="w-full px-5 py-16">
            <h3 className="text-lg font-bold uppercase text-light_grey">My Projects</h3>
            <p className="text-white text-2xl font-bold">Work that I’ve done for the past 8 years</p>
            <ul className="text-white pt-10 grid gap-10 ">
                {
                    projects.map(project => 
                        (
                            <li key={project.id} className="grid">
                                <div className="w-full">
                                    <img className='w-full object-cover object-center' src={project.img} alt="" />
                                </div>
                                <div className="bg-level1 py-8 grid gap-4 px-5">
                                    <h3 className="text-3xl text-white font-bold">{project.name}</h3>
                                    <p className="text-lg text-light_grey font-normal">{project.description}</p>
                                </div>
                            </li>
                        )
                    )
                }
                
            </ul>
        </section>
        
        <form className="[&>label]:grid [&>label]:gap-5 grid gap-6 w-full px-5 items-center">
            <h3 className="text-lg font-bold uppercase text-light_grey">Let’s talk business</h3>
            <p className="text-white text-2xl font-bold">Now that you know a lot about me, let me know if you are interested to work with me.</p>
            <label >
                <span className='text-white text-base font-normal'>Name</span>
                <input className='bg-level1 h-[50px] outline-none text-white' 
                    type='text' 
                    autoComplete='off'
                    name='name'
                />
            </label>
            <label >
                <span className='text-white text-base font-normal'>Email</span>
                <input className='bg-level1 h-[50px] outline-none text-white' 
                    type='email' 
                    autoComplete='off'
                    name='email'
                />
            </label>
            <label >
                <span className='text-white text-base font-normal'>Messaje</span>
                <textarea className='bg-level1 outline-none text-white resize-none' 
                    type='text' 
                    autoComplete='off'
                    name='messaje'
                    rows={4}
                />
            </label>
            <button className='bg-purple text-white py-6 px-8 max-w-max mx-auto uppercase text-lg font-bold shadow-lg hover:tacking-widest hover:bg-violet-800 transition-all mt-6 ' type='submit'>LET’S GET STARTED</button>
        </form>
    </main>
    )
}

export default Home