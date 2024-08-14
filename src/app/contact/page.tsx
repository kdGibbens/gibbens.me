'use client';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const sendEmail = () => {
    setIsLoading(true);
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!message) {
      setError('Please enter your message.');
    }
    if (!name) {
      setError('Please enter your name.');
    }

    const templateParams = {
      from_name: name,
      to_name: 'Kelly',
      reply_to: email,
      message,
    };

    setError('');
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY }
      )
      .then(
        function (response) {
          setEmail('');
          setMessage('');
          setName('');
          setIsLoading(false);
          setSuccess(true);
        },
        function (error) {
          setError(`Error: ${error} has occured. Please try again.`);
          setIsLoading(false);
        }
      );
  };
  return (
    <div className="md:basis-2/3 lg:pt-1">
      <form>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={8}
          placeholder="Leave a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {isLoading && <p className="text-slate-50 mt-2">Sending...</p>}
        {success ? (
          <p className="text-slate-50 mt-2">Your Email was sent!</p>
        ) : null}
        {error ? <p className="text-rose-500 mt-2">{error}</p> : null}
      </form>
      <button
        type="submit"
        className="text-slate-50 bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-full"
        onClick={sendEmail}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactPage;
