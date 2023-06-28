import React from 'react';

const Button = ({ text, onClick, fill, type }) => {
  const buttonStyle = {
    fill: 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800',
    outline:
      'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border  font-semibold bg-transparent text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={fill ? buttonStyle.fill : buttonStyle.outline}
    >
      {text}
    </button>
  );
};

export default Button;
