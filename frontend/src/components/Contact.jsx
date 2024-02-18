import React from "react";
import FormSubmit from "./FormSubmit";

const Contact = () => {
  return (
    <>
      <div className="px-8 w-full pb-20 bg-[#4ab0fb]" id="contact">
        <FormSubmit />
        <div className="max-w-7xl w-full mx-auto justify-start space-y-4 flex-none">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-white">
            Have any Questions?
          </p>
          <form
            action="https://script.google.com/macros/s/AKfycbxe7Bha36F30GOTOoQUCDPLoJ6uvtHbP42rJT_fMKStpvlluXfeD9gcyVWgzgEvehEI7A/exec"
            data-email="nishantvedjadhav@gmail.com"
            method="POST"
            className="justify-center inline-flex items-center flex flex-col w-full flex-none"
          >
            <label className="flex space-x-0 w-full max-w-md justify-center inline-flex items-center w-auto flex-none shadow">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white text-gray-700 p-6 rounded-3xl tracking-tighter"
                required
                placeholder="Your Name"
              />
            </label>
            <br />
            <label className="flex space-x-0 w-full max-w-md justify-center inline-flex items-center w-auto flex-none shadow">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white text-gray-700  p-6 rounded-3xl tracking-tighter"
                required
                placeholder="youremail@gmail.com"
              />
            </label>
            <br />
            <label className="flex space-x-0 w-full max-w-md justify-center inline-flex items-center w-auto flex-none shadow">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="w-full bg-white text-gray-700 p-6 rounded-3xl tracking-tighter"
                required
                placeholder="123456789"
              />
            </label>
            <br />

            <label className="flex space-x-0 w-full max-w-md justify-center inline-flex items-center w-auto flex-none shadow">
              <textarea
                id="message"
                name="message"
                rows="3"
                className="w-full bg-white text-gray-700 p-6 rounded-3xl tracking-tighter"
                required
                placeholder="your message!"
              ></textarea>
            </label>
            <br />
            <button
              type="submit"
              className="bg-sky-200 p-6 rounded-3xl p-6 flex-none font-bold hover:bg-lightBlue-500 px-8 py-2"
            >
              Send ✈️
            </button>
            <div style={{ display: "none" }} className="thankyou_message">
              <h2>
                <em>Thanks</em> for contacting us! We will get back to you soon!
              </h2>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto p-4 flex-none opacity-75 hover:opacity-100 transition text-black">
        <div className="text-center text-base">
          Copyright © 2024 | Made with ❤️ by{" "}
          <a
            href="https://github.com/TheNxtBigThing"
            className="hover:underline"
          >
            @TheNxtBigThing
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
