import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  // savedContact is used to store the submitted contact form data and can be sent to a database or API
  const [savedContact, setSavedContact] = useState([]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // further check logic can be added here to validate the form before handling the data
    setIsSubmitted(true);
    console.log(contact);
    setSavedContact(contact);
    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl"
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter your name here"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl"
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Enter your email here"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl"
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
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
      {isSubmitted && (
        <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
          <p className="">
            Thanks for reaching out to me {savedContact.name}, your message has
            been submitted. I will get back to you ASAP at {savedContact.email}!
          </p>
        </section>
      )}
    </div>
  );
};
export default Contact;
