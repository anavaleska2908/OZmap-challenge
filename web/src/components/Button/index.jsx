import { ButtonStyled } from "./styles";

export const Button = ( { children, ...rest } ) => {
  return (
    <ButtonStyled type='button' {...rest}>{ children }</ButtonStyled>
  )
}