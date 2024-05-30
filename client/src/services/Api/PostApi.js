import { axiosClient } from "../../api/axios"

const PostApi = {
    getPosts: async () => {
        return await axiosClient.get("/posts");
    },
}


export default PostApi;