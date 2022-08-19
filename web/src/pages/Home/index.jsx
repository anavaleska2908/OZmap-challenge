import { Container, Content, UlStyled } from "./styles";
import { Card } from "../../components/Card";
import { useUser } from "../../providers/Users";
import { Modal } from "../../components/Modal";

export const Home = () => { 
    const { usersData, switchModal } = useUser();
    return (
        <>
            <Container>
                {switchModal && <Modal />}
                <main>
                    <UlStyled>
                        {usersData.map((userData) => <Card userData={userData} key={userData._id} />)}
                    </UlStyled>
                </main>
            </Container>
        </>
    )
};
