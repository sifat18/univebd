import React, { createContext } from 'react';
import useFirebase from '../dataloadHooks/firebase';
export const AuthContext = createContext()
const Authprovider = ({ children }) => {
    const allContext = useFirebase();
    return (
        // context that provides the methods of userFirebase to all the members 
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;