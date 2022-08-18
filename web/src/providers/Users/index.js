import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const UserContext = createContext([]);

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

const useUserProvider = () => useContext(UserProvider);

export default useUserProvider;