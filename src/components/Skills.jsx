import { skillset } from "../utils/data";
import { SkillSetIcon } from "./icons/Svgs";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Skills = () => {

  return (
    <section>
      <div className="py-10 px-5 grid gap-4 lg:px-[72px] md:px-[50px] md:grid-cols-2 items-center md:mt-20 ">
        <div>
          <h3 className="text-3xl text-white font-bold pb-4 md:text-5xl md:pb-10">
            Skillset
          </h3>
          <p className="text-lg text-light_grey font-normal">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>

        <ul className="py-6 grid gap-7 md:grid md:grid-cols-2">
          {skillset.map((skill) => (
            <li className="grid gap-3" key={skill.id}>
              <SkillSetIcon />
              <h4 className="text-2xl text-white font-bold">
                {skill.skillSetName}
              </h4>
              <ul className="text-base text-light_grey font-normal">
                {skill.skillSetIems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img className="" src="/logos/html.svg" alt="" />
          </div>

          <div className="slide h-[140px]">
            <img className="" src="/logos/css.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/github.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/javascript.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/mongodb.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/nextjs.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/node-js.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/react.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/tailwind.svg" alt="" />
          </div>
        </div>

        <div className="slide-track">
          <div className="slide">
            <img className="" src="/logos/html.svg" alt="" />
          </div>

          <div className="slide h-[140px]">
            <img className="" src="/logos/css.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/github.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/javascript.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/mongodb.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/nextjs.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/node-js.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/react.svg" alt="" />
          </div>

          <div className="slide">
            <img className="" src="/logos/tailwind.svg" alt="" />
          </div>
        </div>
      </div>

    
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/html.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide h-[140px]">
            <img className="" src="/logos/css.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/github.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/javascript.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/mongodb.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/nextjs.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/node-js.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/react.svg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img className="" src="/logos/tailwind.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default Skills;
