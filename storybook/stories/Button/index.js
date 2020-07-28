import React from 'react';
import PropTypes from 'prop-types';

export default function Button({onPress, children}) {
  return <button onClick={onPress}>{children}</button>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
