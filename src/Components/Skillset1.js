import React from 'react';

export default function SkillSet1() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skillset
          </h2>
          {/* <p className="mt-4 text-lg text-gray-500">
            Here are some of my skills in different categories.
          </p> */}
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category 1 */}
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Programming Languages</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">Python</li>
                  <li className="text-base text-gray-500">React</li>
                  <li className="text-base text-gray-500">Java</li>
                  <li className="text-base text-gray-500">C</li>
                </ul>
              </div>
            </div>

            {/* Category 2 */}
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Cloud Platforms</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">AWS</li>
                  <li className="text-base text-gray-500">Azure</li>
                  <li className="text-base text-gray-500">Google Cloud</li>
                  <li className="text-base text-gray-500">IBM Cloud</li>
                </ul>
              </div>
            </div>

            {/* Category 3 */}
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Containers</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">Docker</li>
                  <li className="text-base text-gray-500">Kubernetes</li>
                  <li className="text-base text-gray-500">Openshift</li>
                  <li className="text-base text-gray-500">AWS Fargate, AWS ECS, AWS EKS</li>
                  <li className="text-base text-gray-500">AKS, ACS</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">CI/CD</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">Github Action</li>
                  <li className="text-base text-gray-500">Jenkins</li>
                  <li className="text-base text-gray-500">Code Build, Code Deploy, Code Pipeline</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Infrastructure as Code</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">Terraform</li>
                  <li className="text-base text-gray-500">Cloudformation</li>
                  <li className="text-base text-gray-500">Ansible</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg shadow-lg">
              <div className="bg-gray-500 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Libraries and Frameworks</h3>
              </div>
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2">
                  <li className="text-base text-gray-500">Flask, Fastapi, request, beautifulsoup, SQLAlchemy </li>
                  <li className="text-base text-gray-500">Pandas, Numpy, Matplotlib, Plotly</li>
                  <li className="text-base text-gray-500">Tensorflow, Keras, Opencv, scikit, NLTK </li>
                  <li className="text-base text-gray-500">AWS ML services, Azure ML services</li>
                </ul>
              </div>
            </div>
            {/* Continue adding more categories */}
          </div>
        </div>
      </div>
    </div>
  );
}