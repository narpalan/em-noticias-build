import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

function AppProvider({ children }) {
  const [user, setUser] = useState({
    email:'',
    password: '',
  });
  const contextValue = useMemo(() => ({
    user,
    setUser,
  }),[
    user,
    setUser,
  ]);
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
