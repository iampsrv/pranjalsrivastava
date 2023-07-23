import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
export const ContactUs = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rflykgj', 'template_0dneud9', form.current, 'AqPpj7JNY1IfziI3n')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setIsSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactme" className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's Build Something Great Together</h1>
          {isSuccess && <p className="text-green-500">Email sent successfully!</p>}
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="user_name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="user_name" name="user_name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="user_email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="user_email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
              </div>
            </div>
            <div className="p-2 w-full">
              <input type="submit" value="Send" className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg cursor-pointer"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};