import React from 'react';

export default function WorkExperience() {
  return (
    <div className="flex flex-col p-6 sm:p-10 bg-white shadow-md rounded-lg">
      <div className="text-4xl font-bold text-gray-800 mb-8 text-center">Work Experience</div>

      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-20 md:w-32 text-gray-400 font-semibold text-sm">01/2023 - Present</div>
          <div className="flex-1">
            <div className="text-xl font-medium">GeeksforGeeks</div>
            <div className="text-gray-600 text-lg">Devops Mentor</div>
            <div className="text-gray-700 mt-2">
              <ul>
                <li>Mentored and guided a diverse group of professionals and students in mastering DevOps concepts, tools, and best practices.</li>
                <li>Conducted 100+ live training sessions and workshops, covering topics such as Linux, Git, Docker, Kubernetes, Jenkins, AWS, and more.</li>
                <li>Designed and delivered comprehensive learning materials, including presentations, hands-on exercises, and reference guides.</li>
                <li>Collaborated with cross-functional teams to develop and update training content based on industry trends and feedback from students.</li>
                <li>Fostered a collaborative and inclusive learning environment, encouraging active participation and knowledge sharing among students.</li>
              </ul>
            </div>
            <div className="text-gray-500 mt-4">
              Tools: Git, Github, Docker, Github Actions, Jenkins, Kubernetes, AWS, Terraform, Ansible, Prometheus, Grafana
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-20 md:w-32 text-gray-400 font-semibold text-sm">01/2023 - Present</div>
          <div className="flex-1">
            <div className="text-xl font-medium">Tata Consultancy Services</div>
            <div className="text-gray-600 text-lg">Assistant System Engineer</div>
            <div className="text-gray-700 mt-2">
              <ul>
                <li>Expertly configured and administered a fleet of 23 Redhat servers, ensuring optimal performance and seamless operations.</li>
                <li>Developed and implemented a series of highly effective workflow automation scripts, resulting in a 30% increase in operational efficiency.</li>
                <li>Proficiently transformed vast volumes of unstructured data into structured tables, enabling efficient analysis and insights.</li>
              </ul>
            </div>
            {/* <div className="text-gray-500 mt-4">
              Tools: Git, Github, Docker, Github Actions, Jenkins, Kubernetes, AWS, Terraform, Ansible, Prometheus, Grafana
            </div> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-20 md:w-32 text-gray-400 font-semibold text-sm">01/2023 - Present</div>
          <div className="flex-1">
            <div className="text-xl font-medium">Udemy, Tutorialspoint, Skillshare and Simpliv</div>
            <div className="text-gray-600 text-lg">Freelance Instructor</div>
            <div className="text-gray-700 mt-2">
              <ul>
                <li>Published 77 of highly-rated courses on platforms such as Udemy, Skillshare, Simpliv, and Tutorialspoint, reaching 200,000+ of students worldwide on wide array of technologies like containers, cloud computing, microservices, DevOps, Programming languages like Java, Python</li>
                <li>Developed and delivered engaging video lectures, practical demonstrations, and hands-on exercises to enhance students' understanding of DevOps technologies and practices.</li>
                <li>Received positive reviews and testimonials from students, acknowledging my ability to simplify complex concepts and provide actionable insights.</li>
                <li>Continuously updated course content to reflect the latest trends and advancements in the DevOps industry.</li>
                <li>Interacted with students through discussion boards, providing prompt responses to their queries and fostering a supportive learning community.</li>
              </ul>
            </div>
            <div className="text-gray-500 mt-4">
              Tools: Git, Github, Docker, Github Actions, Jenkins, Kubernetes, AWS, Terraform, Ansible, Prometheus, Grafana
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
