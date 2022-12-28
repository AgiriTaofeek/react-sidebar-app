import React from 'react';

const Button = ({ css, children, onClick }) => {
  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
