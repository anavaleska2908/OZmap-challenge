import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { Link } from 'react-router-dom';
import { Container, Content } from "./styles";
import { useUser } from '../../providers/Users';

export const Login = () => { 
    const { handleFormLoginSubmit } = useUser();
    const loginSchema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        password: yup.string().min(8, 'Mínimo de 8 dígitos ').required('Campo obrigatório!'),
    });
    const { register, handleSubmit, formState: { errors } } = useForm( {
        resolver: yupResolver(loginSchema)
    });
    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit(handleFormLoginSubmit)}>
                    <h1>Faça seu login</h1>
                    <Input 
                      register={register} 
                      icon={ FiMail } 
                      label='Email' 
                      placeholder='Digite seu email' 
                      name='email' 
                      error={errors.email?.message}
                    />
                    <Input 
                      register={register} 
                      icon={ FiLock } 
                      label='Senha' 
                      placeholder='Digite sua senha' 
                      type='password' 
                      name='password'
                      error={errors.password?.message}            
                    />
                    <Button type='submit'>Enviar</Button>
                    <p>
                      Não tem uma conta? Faça seu <Link to='/signup'>cadastro</Link>.
                    </p>
                </form>
            </Content>
        </Container>
    )
};
