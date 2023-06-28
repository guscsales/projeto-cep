import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Card({ children, className, ...props }) {
  const defaultClassName = classNames(
    `rounded border border-solid border-gray-300 p-3`,
    className
  );

  return (
    <div {...props} className={defaultClassName}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
