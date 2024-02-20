import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Careers({isOpen,setIsOpen}) {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  var p = document.getElementById("p")

  const handleClose = () => {
    setIsOpen(false);
    setSubmissionStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    if (fullName && email && role && resume && coverLetter) {
     
      console.log("Form submitted");
      
      setFullName('');
      setEmail('');
      setRole('');
      setResume('');
      setCoverLetter('');
     
      p.style.color="green"
      setSubmissionStatus('Submitted');
    } else {
      
      console.log("Please fill in all fields");
     
      p.style.color="red"
      setSubmissionStatus('Please fill in all fields');
    }
  };

  

  const modalClass = isOpen ? "fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" : "hidden";

  return (
    <>
      
      <div className={modalClass}>
        <div className="w-11/12 max-w-lg bg-white p-8 rounded shadow-lg relative">
          <button
            className="absolute top-0 right-0 mt-3 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} size='1x'/>
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email ID:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="role"
                type="text"
                placeholder="Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                Resume:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="resume"
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                Cover Letter:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="coverLetter"
                type="text"
                placeholder="Cover Letter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className={`mt-4 text-center`} id='p'>
              {submissionStatus}
          </p>

        </div>
      </div>
    </>
  );
}