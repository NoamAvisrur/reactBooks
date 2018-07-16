import React from 'react';
import PropTypes from 'prop-types';

const about = (props) => {
  return <div className="about-wrapper">
    <h2>About my Book Store</h2>
    <p>{props.about}</p>
  </div>
}

about.prototype = {
  about: PropTypes.string
}
export default about;