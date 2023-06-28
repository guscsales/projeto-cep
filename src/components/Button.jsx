import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  type,
  className,
  disabled = false,
  ...props
}) {
  const defaultClassName = classNames(
    `rounded bg-gray-300 text-gray-900 text-xl font-bold h-16 w-full px-3 py-2`,
    {
      'pointer-events-none opacity-40': disabled,
    },
    className
  );

  return <button className={defaultClassName} type={type} {...props}></button>;
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
