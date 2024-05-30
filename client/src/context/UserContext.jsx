/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import UserApi from "../services/Api/UserApi";

const UserContext = createContext({
    user: {},
    authenticated: false,
    setUser: () => {},
    login: (email, password) => {},
    register: (payload) => {},
    logout: () => {},
    getUser: () => {},
    getUsers: () => {},
    getIntervenants: () => {},
    setAuthenticated: () => {},
    setToken: () => {},
});

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [authenticated, _setAuthenticated] = useState(
        "true" === window.localStorage.getItem("AUTHENTICATED")
    );

    const login = async (email, password) => {
        await UserApi.getCsrf();
        return UserApi.login(email, password);
    };

    const register = async (payload) => {
        await UserApi.getCsrf();
        return UserApi.register(payload);
    };

    const logout = () => {
        setUser({});
        setAuthenticated(false);
    };

    const getUser = async () => {
        return UserApi.getUser();
    };
    const getUsers = async () => {
        return UserApi.getUsers();
    };

    const getIntervenants = async () => {
        return UserApi.getIntervenants();
    };

    const setAuthenticated = (isAthenticated) => {
        _setAuthenticated(isAthenticated);
        window.localStorage.setItem("AUTHENTICATED", isAthenticated);
    };

    const setToken = (token) => {
        window.localStorage.setItem('token', token)
      }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                authenticated,
                setAuthenticated,
                login,
                register,
                logout,
                getUser,
                getUsers,
                getIntervenants,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UserContext);
    if (context === undefined)
        throw new Error("useUsers was used outside the QuestionsProvider");
    return context;
}

export default UserProvider;
