import { UserProvider } from "./Users";

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
