import React, { createContext } from 'react';

export const AuthContext = createContext({
  isAuthenticated: "NO",
  login: () => {}
})