const About = () => {
  return (
    <section name='about' className="grid md:grid-cols-2 items-center bg-peach">
      <div className="px-5 bg-peach py-10 lg:pl-[72px] md:pl-[50px]">
        <h3 className="text-3xl font-bold text-level1 pb-4 md:text-5xl md:pb-10">
          Philosophy & values
        </h3>
        <p className="text-lg font-normal text-dark_grey pb-10 md:text-xl md:pb-16">
          I think everyone wants the same thing - relationship with humanity,
          peace with the metaphysical, and experience with the universe. I try
          to grasp these things with my values: authenticity, creativity, &
          hospitality.
        </p>
        <a
          className="text-black border-b border-b-dark_grey pb-2"
          href="https://www.linkedin.com/in/yurik-rivera-zeled%C3%B3n-066726237/"
        >
          Check my Linkedin
        </a>
      </div>
      <div className="w-full max-h-[600px] overflow-hidden">
        <img
          className="w-full object-cover object-center "
          src="/images/foto2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
