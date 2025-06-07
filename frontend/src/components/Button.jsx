import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const Button = ({ type = 'button', size = 'md', onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
