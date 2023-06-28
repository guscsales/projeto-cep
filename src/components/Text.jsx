import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const textVariations = {
  base: 'text-sm lg:text-base text-gray-100',
  lg: 'text-lg text-gray-50 font-bold',
  '3xl': 'text-2xl lg:text-3xl text-gray-50 font-bold',
  '4xl': 'text-3xl lg:text-4xl text-gray-50 font-bold',
};

export default function Text({ variation = 'base', as = 'span', ...props }) {
  const className = classNames(textVariations[variation], props.className);

  return React.createElement(as, { ...props, className });
}

Text.propTypes = {
  variation: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
};
