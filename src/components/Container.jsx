import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Container({ children, ...props }) {
  const className = classNames('container', props.className);
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
