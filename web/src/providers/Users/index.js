import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);
    const [usersDataObservation, setUsersDataObservation] = useState([...usersData])
    const [userToEdit, setUserToEdit] = useState([]);
    const [switchModal, setSwitchModal] = useState(false);
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
        api.post("/login", data)
            .then((response) => {
                const { token, user } = response.data;
                localStorage.setItem("@OZmap:token", token);
                localStorage.setItem("@OZmap:user", JSON.stringify(user));
                return history.push("/home");
            }).catch((error) => toast.error("Email ou senha inválidos!"));
    }
    
    const handleClickLogout = () => {
        localStorage.clear();
        return history.push("/");
    }
    
    const atualizationPage = (data) => {
        setUsersDataObservation(data);
    }
    
    useEffect(() => {
        api.get("/users")
        .then((response) => {            
            setUsersData(response.data);
            atualizationPage(response.data);
        }).catch((error) => console.log(error));
    }, [usersDataObservation]);
    
    const handleDeleteUserButton = (id) => {        
        api.delete(`/users/${id}`).then((response) => {
            toast.warning("Usuário removido com sucesso!");
        }).catch((error) => console.log(error))
    }
    
    const getDataToModalUpdate = (userId) => {
        api.get(`/users/${userId}`).then((response) => {
            setUserToEdit(response.data);
        }).catch((error) => console.log(error));
    }
    
    const handleUpdateUserModal = (data) => {
        console.log("data ", data);
        api.patch(`/users/${userToEdit._id}`, data).then((response) => {
            toast.success("Usuário atualizado com sucesso!");
            setSwitchModal(false);
        }).catch((error) => console.log(error));
    }
    
    return (
        <UserContext.Provider
            value={{
                handleFormRegisterSubmit,
                handleFormLoginSubmit,
                usersData,
                handleDeleteUserButton,
                handleUpdateUserModal,
                switchModal,
                setSwitchModal,
                getDataToModalUpdate,
                userToEdit,
                handleClickLogout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);