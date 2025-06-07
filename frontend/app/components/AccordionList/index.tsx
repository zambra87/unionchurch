'use client';

import { useState } from 'react';

export const AccordionList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex justify-between gap-4 cursor-pointer hover:bg-gray-100 px-8 items-center"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div
        className={`flex flex-col py-8 transition-all duration-300 ${isOpen ? 'gap-2' : ''}`}
      >
        <p className="font-sans text-xl">
          What volunteed opportunities are available?
        </p>
        <p
          className={`text-gray-700 h-0 overflow-hidden transition-all duration-300 ${
            isOpen ? 'h-auto' : 'h-0'
          }`}
        >
          We have a wide range of opportunities for you to serve at Elevation
          Church. From greeting guests at a campus, hosting in the chat online,
          to volunteering at church behind the scenes – God’s given you unique
          talents to help build His church. Let’s help you find the perfect
        </p>
      </div>
      <svg
        className={`h-6 w-6 text-gray-700 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>
  );
};
