import UserProvider from "./Users";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default Providers;