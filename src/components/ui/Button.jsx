import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children,className, ...rest}) => {
  return (
   <button className={twMerge(``,className)}{...rest}>
{children}
   </button>
  );
};

export default Button