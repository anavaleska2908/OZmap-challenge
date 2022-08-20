import { Container, HeaderStyled, UlStyled } from "./styles";
import { Card } from "../../components/Card";
import { useUser } from "../../providers/Users";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";

export const Home = () => { 
    const { usersData, switchModal, handleClickLogout } = useUser();
    return (
            <Container>
                {switchModal && <Modal />}
                <HeaderStyled>
                    <h1>Usuários</h1>
                    <Button onClick={handleClickLogout}>Logout</Button>
                </HeaderStyled>
                <main>
                    <UlStyled>
                        {usersData.map((userData) => <Card userData={userData} key={userData._id} />)}
                    </UlStyled>
                </main>
            </Container>
    )
};
