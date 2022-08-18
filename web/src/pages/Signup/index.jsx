import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { RiUserHeartLine } from 'react-icons/ri';
import { Container, Content } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useUser } from '../../providers/Users';

export const Signup = () => { 
    const { handleFormRegisterSubmit } = useUser();
    
    const registerSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup.string().email("Email inválido").required("Campo obrigatório!"),
        age: yup.number().required("Campo obrigatório!").positive().min(18, "Você deve ser maior de idade").integer(),
        password: yup.string().min( 8, 'Mínimo de 8 digítos' ).required( "Campo obrigatório!" ),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required("Campo obrigatório!"),
    });
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(registerSchema)
    })
    
    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit(handleFormRegisterSubmit)}>
                    <h1>Cadastro</h1>
                    <Input
                        register={register}
                        icon={FiUser}
                        label='Nome'
                        placeholder='Digite seu nome completo'
                        name='name'
                        error={errors.name?.message}
                    />
                    <Input
                        register={register}
                        icon={FiMail}
                        label='Email'
                        placeholder='Digite seu email'
                        name='email'
                        error={errors.email?.message}
                    />
                    <Input
                        register={register}
                        icon={RiUserHeartLine}
                        label='Idade'
                        placeholder='Digite sua idade'
                        name='age'
                        error={errors.age?.message}
                    />
                    <Input
                        register={register}
                        icon={FiLock}
                        label='Senha'
                        placeholder='Digite sua senha'
                        type='password'                         
                        name='password'
                        error={errors.password?.message}
                    />
                    <Input
                        register={register}
                        icon={FiLock}
                        label='Confirme sua senha'
                        placeholder='Digite sua senha novamente'
                        type='password'                         
                        name='passwordConfirm'
                        error={errors.passwordConfirm?.message}
                    />
                    <Button type='submit'>Cadastrar</Button>
                    <p>Já tem uma conta? Faça seu <Link to='/'>login</Link></p>
                </form>
            </Content>
        </Container>
    )
};
