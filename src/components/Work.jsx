
const Work = () => {
  return (
    <section name='work' className="w-full px-5 py-16 lg:px-[72px] md:px-[50px] md:flex md:flex-wrap md:gap-8 ">
        <div className="w-full md:w-[47%]">
            <h3 className="text-lg font-bold uppercase text-light_grey pb-4">My Projects</h3>
            <p className="text-white text-3xl font-bold md:text-5xl pb-10">Work that I’ve done for the past 8 years</p>
            <div className="grid pb-10">
                <div className="w-full">
                <img
                    className="w-full object-cover object-center"
                    src='/images/project1.png'
                    alt=""
                />
                </div>
                <div className="bg-level1 py-8 grid gap-4 px-5">
                    <h3 className="text-3xl text-white font-bold">Restaurant Website Design</h3>
                    <p className="text-lg text-light_grey font-normal">
                        I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
            </div>
            <div className="grid pb-10">
                <div className="w-full">
                <img
                    className="w-full object-cover object-center"
                    src='/images/project2.png'
                    alt=""
                />
                </div>
                <div className="bg-level1 py-8 grid gap-4 px-5">
                    <h3 className="text-3xl text-white font-bold">Mobile Dashboard</h3>
                    <p className="text-lg text-light_grey font-normal">
                        I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full md:w-[47%]">
            <div className="grid pb-10">
                <div className="w-full">
                <img
                    className="w-full object-cover object-center"
                    src='/images/project3.png'
                    alt=""
                />
                </div>
                <div className="bg-level1 py-8 grid gap-4 px-5">
                    <h3 className="text-3xl text-white font-bold">Mobile Dashboard</h3>
                    <p className="text-lg text-light_grey font-normal">
                        I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
            </div>
            <div className="grid pb-10">
                <div className="w-full">
                <img
                    className="w-full object-cover object-center"
                    src='/images/project4.png'
                    alt=""
                />
                </div>
                <div className="bg-level1 py-8 grid gap-4 px-5">
                    <h3 className="text-3xl text-white font-bold">T-Box Mobile Design</h3>
                    <p className="text-lg text-light_grey font-normal">
                        I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <button className="border border-purple text-white py-6 px-8 max-w-max mx-auto uppercase text-lg font-bold shadow-lg hover:tacking-widest hover:bg-[rgba(255,255,255,0.20)] transition-all mt-6">view all projects</button>
                </div>
            </div>
        </div>
      
      
    </section>
  );
};

export default Work;
