const Contact = () => {
  return (
    <div className="alignment-class h-100 flex flex-col bg-sky-100">
      <h1 className="text-4xl font-bold tracking-widest mr-auto text-sky-950">
        Contact
      </h1>
      <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
        <p className="flex flex-row gap-4 justify-start items-center">
          <span>
            Fill in the contact form below to get in touch with me. Thanks!
          </span>
        </p>
      </section>
      <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
        <form className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            required
          />
          <button
            type="submit"
            className="bg-sky-950 text-white font-bold p-4 rounded-xl"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
export default Contact;
