import { Container, InputStyled } from "./styles";

export const Input = ( {label, icon: Icon, register, name, error = '', ...rest }) => {
  return (
    <Container>
      <div>{ label } { !!error && <span>{ error }</span> }</div>
      <InputStyled isErrored={!!error}>
      { Icon && <Icon size={ 20 }/>}
        <input {...register(name)} { ...rest } />
      </InputStyled>
    </Container>
  )
}