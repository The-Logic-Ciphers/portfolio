import React from 'react';
import { twMerge } from 'tailwind-merge';

const Cards = ({ children, className, ...rest }) => {
  return (
    <>
      <div className={twMerge(`w-8/12 bg-white rounded-lg overflow-hidden `, className)} {...rest}>
        {children}
    </div></>
  );
};

export default Cards;
