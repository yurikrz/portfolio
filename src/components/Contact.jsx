
const Contact = () => {
  return (
    <section name='contact' className="grid gap-6 w-full px-5 py-10 lg:px-[100px] md:px-[50px] md:grid-cols-2">
      <div>
        <h3 className="text-3xl font-bold uppercase text-white pb-6 md:text-5xl">
          Let’s talk business
        </h3>
        <p className="text-light_grey text-lg font-normal">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </div>

      <form
        action="https://getform.io/f/809046a5-dc98-46ee-a101-c4c7949d6215"
        method="POST"
        className="grid gap-6 [&>label]:grid [&>label]:gap-5 "
      >
        <label>
          <span className="text-white text-base font-normal">Name</span>
          <input
            className="p-2 bg-level1 h-[50px] focus:outline-none text-white placeholder:p-2"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </label>
        <label>
          <span className="text-white text-base font-normal">Email</span>
          <input
            className="p-2 bg-level1 h-[50px] focus:outline-none text-white placeholder:p-2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          <span className="text-white text-base font-normal">Messaje</span>
          <textarea
            className="p-2 bg-level1 outline-none text-white resize-none placeholder:p-2"
            name="messaje"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
        </label>
        <button
          className="bg-purple text-white py-6 px-8 max-w-max mx-auto uppercase text-lg font-bold shadow-lg hover:tacking-widest hover:bg-dark_purple transition-all mt-6 "
          type="submit"
        >
          LET’S GET STARTED
        </button>
      </form>
    </section>
  );
};

export default Contact;
