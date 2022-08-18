import { Container, Content, UlStyled } from "./styles";
import { Card } from "../../components/Card";
import { useUser } from "../../providers/Users";

export const Home = () => { 
    const { usersData } = useUser();
    return (
        <>
            <Container>
                <main>
                    <UlStyled>
                        {usersData.map((userData) => <Card userData={userData} key={userData._id} />)}
                    </UlStyled>
                </main>
            </Container>
        </>
    )
};
