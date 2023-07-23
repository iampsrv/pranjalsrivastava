import React from 'react';
import mainLogo from './profile-pic.jpg';

export default function Aboutme() {
  return (
    <div id="aboutme" className="py-8 bg-white">
      <div className="container mx-auto px-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">Meet Pranjal Srivastava – a self-taught developer and a captivating content creator! His journey began in January 2018 when he launched his first online course. Since then, he has taken the eLearning world by storm, authoring an impressive collection of 77+ courses and imparting knowledge to over 150,000 students worldwide across renowned platforms such as Udemy, Skillshare, Tutorialspoint, and Simpliv.

Pranjal's expertise spans a diverse range of cutting-edge technologies, including DevOps, Cloud, Machine Learning, Data Science, and more. While he has delved into numerous domains, his passion for DevOps sets him apart. In his leisure time, he fearlessly ventures into the realm of DevOps tools, conducting intriguing experiments and creating exceptional projects.</p>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <img className="mx-auto h-50 w-50 shadow-md hover:shadow-lg transform transition-transform" src={mainLogo} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
