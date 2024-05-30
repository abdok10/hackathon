import { axiosClient } from "../../api/axios"

const UserApi = {
    getCsrf: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL,
        });
    },

    login: async (email, password) => {
        return await axiosClient.post("/login", {email, password});
    },

    register: async (payload) => {
        return await axiosClient.post("/register", payload);
    },

    logout: async () => {
        return await axiosClient.post("/logout");
    },

    getUser: async () => {
        return await axiosClient.get("/api/user");
    },

    getUsers: async () => {
        return await axiosClient.get("/users");
    },

    getIntervenants: async () => {
        return await axiosClient.get("/intervenants");
    },
}


export default UserApi;