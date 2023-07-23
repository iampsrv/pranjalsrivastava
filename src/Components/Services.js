import React from 'react';

const servicesData = [
  {
    title: '1-to-1 Mentorship',
    description: 'Get personalized guidance and support tailored to your specific needs. Whether you are a beginner looking to start your journey or an experienced individual seeking to advance your skills, I will be your dedicated mentor, helping you every step of the way.',
  },
  {
    title: 'Live Sessions',
    description: 'Join me in live sessions where we dive deep into various tech topics. These interactive sessions provide an opportunity to learn in real-time, ask questions, and collaborate with other like-minded individuals.',
  },
  {
    title: 'Course Creation',
    description: 'As an experienced content creator, I develop comprehensive and engaging courses on diverse subjects, including DevOps, Cloud, ML, Data Science, and more. My courses are designed to empower students with practical knowledge and hands-on experience.',
  },
  {
    title: 'Consultancy',
    description: 'Need expert advice on technology-related projects or strategies? I offer consultancy services to individuals and businesses, helping them make informed decisions and overcome challenges in the tech landscape.',
  },
];

const Service = ({ title, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
      <div className="relative">
        <h2 className="text-xl font-medium text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Services Offered</h1>
        </div>
        <div className="grid grid-cols-2 gap-4"> {/* Set grid-cols-2 for 2x2 column layout */}
          {servicesData.map((service, index) => (
            <Service key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};