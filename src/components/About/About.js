import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const about = (props) => {
  return <div className="about-wrapper">
    <h2>About my Book Store</h2>
    <p>{props.about}</p>
  </div>
}

about.prototype = {
  about: PropTypes.string
}

const mapStateToProps = state => {
  return {
    about: state.about.about,
    userName: state.user.userName
  };
};

export default connect(mapStateToProps, null)(about);