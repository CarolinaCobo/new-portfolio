import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    setEmail("");
    setName("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vp7qrfd",
        "template_tngtc2q",
        form.current,
        "user_HTT6JvIMa0YqrzXyDfQLh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message, I'll get back to you soon!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, something went wrong 😢 please try again or reach out to me on LinkedIn"
          );
        }
      );
    handleSubmit();
  };

  return (
    <div
      id="contact-section"
      className="py-12 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 bg-gray-900"
    >
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Contact me
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            If you&apos;d like to collaborate, asking questions about career
            switching or just to know me a bit better feel free to send me a
            message!
          </p>
        </div>
        <div id="formInfo" className="mt-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  autoComplete="given-name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                onClick={sendEmail}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
