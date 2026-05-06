import React, { createContext, useContext } from 'react';

const AuthContext = createContext({ user: { name: "Guest" } });

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ user: { name: "Guest" } }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
