import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import withAuth from './withAuth';
import Wrappedcomponent from '../components/index';

const ProtectedComponents = () => {
  return (
    <div>
    <Wrappedcomponent />
    </div>
  );
};

// Add propTypes for prop validation
ProtectedComponents.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withAuth(ProtectedComponents);
