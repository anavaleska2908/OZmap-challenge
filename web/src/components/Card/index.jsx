import { Button } from "../../components/Button";
import { Content, DivButton, LiStyled } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useUser } from "../../providers/Users";

export const Card = ({ userData }) => {
    const { handleDeleteUserButton, } = useUser();
    return (
        <LiStyled id={ userData._id }>
            <h2>Dados do usuário:</h2>
            <Content>
                <p>Nome: { userData.name }</p>
                <p>Email: { userData.email }</p>
                <p>Idade: { userData.age }</p>
                
            </Content>
            <DivButton>
                <Button><AiOutlineEdit size={20}/></Button>
                <Button onClick={() => handleDeleteUserButton(userData._id)}><MdDeleteOutline size={20}/></Button>
            </DivButton>
        </LiStyled>
    )
}