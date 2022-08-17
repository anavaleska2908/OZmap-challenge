import AuthService from "../services/session.service";

class SessionController { 
    static async store (data) {
        const { email, password } = data;
        const authenticatedUser = await AuthService.store({email, password});
        return authenticatedUser;
    }
}

export default SessionController;