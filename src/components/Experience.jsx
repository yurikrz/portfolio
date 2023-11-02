import { works } from "../utils/data";

const Experience = () => {
  return (
    <section name='experience' className="w-full px-5 py-16 lg:px-[72px] md:px-[50px] md:mt-20">
      <h3 className="text-lg font-bold uppercase text-light_grey md:text-xl pb-2 mb:pb-4">
        Work Experience
      </h3>
      <p className="text-white text-2xl font-bold md:text-5xl">
        Companies I have worked for in the past.
      </p>
      <ul className="text-white pt-10 md:flex md:justify-between md:items-center md:gap-6 grid gap-10">
        {works.map((work) => (
          <li key={work.id} className="grid gap-2">
            <h3 className="text-9xl font-normal text-light_grey">{work.id}</h3>
            <p className="text-2xl font-bold ">
              <span style={{ color: work.color }}>{work.company}</span>,{" "}
              {work.work}
            </p>
            <p className="text-lg font-normal">{work.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
