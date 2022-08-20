import { Container, Content } from "./styles";
import { Button } from "../Button";
import { useUser } from "../../providers/Users";
import { Input } from "../Input";
import { IoCloseCircleOutline, IoCloseOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { RiUserHeartLine } from 'react-icons/ri';
import { useState } from "react";

export const Modal = () => {
    const { setSwitchModal, handleUpdateUserModal, userToEdit } = useUser();
    const [nameValue, setNameValue] = useState(userToEdit.name);
    const [emailValue, setEmailValue] = useState(userToEdit.email);
    const [passwordValue, setPasswordValue] = useState(userToEdit.password);
    const [ageValue, setAgeValue] = useState(userToEdit.age);
    
    const updateSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        age: yup.number().required("Campo obrigatório!").positive().min(18, "Você deve ser maior de idade").integer(),
        password: yup.string().min( 6, 'Mínimo de 6 digítos' ).required( "Campo obrigatório!" ),
    });
    const { register, handleSubmit, formState: { errors } } = useForm( {
        resolver: yupResolver(updateSchema),
    });
    return (
        <Container>
            <Content>
                <div className="div_context">
                    <div className="div_header">
                        <h3>Edite os dados:</h3>
                        <Button className="button_close" onClick={() => setSwitchModal(false)}><IoCloseCircleOutline size={24}/></Button>
                    </div>                    
                    <form onSubmit={handleSubmit(handleUpdateUserModal)}>
                        <Input
                            register={register}
                            icon={FiUser}
                            label='Nome'
                            name='name'
                            defaultValue={nameValue}
                            onChange={(event) => setNameValue(event.target.value)}
                            error={errors.name?.message}
                        />
                        <Input
                            register={register}
                            icon={FiMail}
                            label='Email'
                            name='email'
                            defaultValue={emailValue}                                
                            onChange={(event) => setEmailValue(event.target.value)}
                            error={errors.email?.message}
                        />
                        <Input
                            register={register}
                            icon={RiUserHeartLine}
                            label='Idade'
                            name='age'
                            defaultValue={ageValue}
                            onChange={(event) => setAgeValue(event.target.value)}                            
                            error={errors.age?.message}
                        />
                        <Input
                            register={ register }
                            icon={FiLock}
                            label='Senha'
                            type='password'                        
                            name='password'
                            defaultValue={passwordValue}
                            onChange={(event) => setPasswordValue(event.target.value)}
                            error={errors.password?.message}
                        />
                        <div className="div_footer">
                            <Button
                                className="button_check"
                                type="submit"
                            >
                                <BiCheck size={ 20 }/>
                            </Button>
                            <Button className="button_check"  onClick={() => setSwitchModal(false)}><IoCloseOutline size={20}/></Button>
                        </div>
                    </form>
                </div>
            </Content>
        </Container>
    )
}