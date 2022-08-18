import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);
    const history = useHistory();
    
    const handleFormRegisterSubmit = ({ name, email, password, age }) => {
        const user = { name, email, password, age };
        api.post( "/register", user ).then( ( _ ) =>
        {
            toast.success( "Sua conta foi criada com sucesso!" );
            return history.push("/login");
        } ).catch((error) => toast.error("Erro ao criar a conta, tente outro email!"));
    }
    
    const handleFormLoginSubmit = (data) => {
        api.post("/", data)
            .then((response) => {
                const { token, _id: id, name, email, age } = response.data;
                const user = { id, name, email, age }
                localStorage.setItem("@OZmap:token", token);
                localStorage.setItem("@OZmap:user", JSON.stringify(user));
                return history.push("/home");
            }).catch((error) => toast.error("Email ou senha inválidos!"));
    }
    

    
    return (
        <UserContext.Provider value={{
            handleFormRegisterSubmit,
            handleFormLoginSubmit,
            usersData,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);