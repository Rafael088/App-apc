import React, {createContext, useState} from 'react'
export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [authU, setAuth] = useState();
    const [selectOrder, setSelectOrder] = useState(null);

    return ( 
        <AuthContext.Provider value={{authU, setAuth, selectOrder, setSelectOrder}}>
            {children}
        </AuthContext.Provider>
     );
}