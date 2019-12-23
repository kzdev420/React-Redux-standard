import React from 'react';
import { connect } from 'react-redux';

export const Link = ({ children, to, dispatch, ...props }) => {
  const handleClick = (event) => {
    // Ignore any click other than a left click
    if ((event.button && event.button !== 0)
      || event.metaKey
      || event.altKey
      || event.ctrlKey
      || event.shiftKey
      || event.defaultPrevented === true) {
      return;
    }
  
    // Prevent the default behaviour (page reload, etc.)
    event.preventDefault();
    // Dispatch the appropriate navigation action
    /*
     * for now we are not supporting replace
    if (replace) {
      dispatch(replaceAction(to));
    } else {
      dispatch(pushAction(to));
    }
    */
    dispatch(to);
  };

  return (
    <a href={to.path} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default connect()(Link);
