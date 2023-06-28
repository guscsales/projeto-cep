import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const InputText = React.forwardRef(({ className, ...props }, ref) => {
  const defaultClassName = classNames(
    `rounded h-16 text-lg 
      border border-solid border-gray-200 
      bg-transparent w-full px-3 py-2 text-gray-50`,
    className
  );

  return (
    <input className={defaultClassName} type="text" ref={ref} {...props} />
  );
});

InputText.displayName = 'InputText';

InputText.propTypes = {
  className: PropTypes.string,
};

export default InputText;
