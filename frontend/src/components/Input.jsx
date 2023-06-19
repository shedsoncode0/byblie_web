import React from 'react';

const Input = ({ type, id, name, props, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={(e) => onChange(e)}
      className='py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
      required
      aria-describedby='password-error'
      {...props}
    />
  );
};

export default Input;
