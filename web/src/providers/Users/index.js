import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
    const history = useHistory();
    
    const handleFormRegisterSubmit = ({ name, email, password, age }) => {
        const user = { name, email, password, age };
        api.post( "/register", user ).then( ( _ ) =>
        {
            toast.success( "Sua conta foi criada com sucesso!" );
            return history.push( "/login" );
        } ).catch( error => toast.error( "Erro ao criar a conta, tente outro email!" ) );
    }
    
    
    return (
        <UserContext.Provider value={{
                handleFormRegisterSubmit,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);