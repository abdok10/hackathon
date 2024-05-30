import { createContext, useContext, useState } from "react";
import PostApi from "../services/Api/PostApi";

const PostContext = createContext({
    posts: {},
    setPosts: {},
    getPosts: () => {},
});

// eslint-disable-next-line react/prop-types
function PostProvider({ children }) {
    const [ posts, setPosts ] = useState({});


    const getPosts = async () => {
        return PostApi.getPosts();
    }

    return (
        <PostContext.Provider
            value={{
                posts,
                setPosts,
                getPosts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}


function usePosts() {
    const context = useContext(PostContext);
    if (context === undefined)
        throw new Error("usePosts was used outside the PostProvider");
    return context;
}

export default PostProvider;
export { usePosts };