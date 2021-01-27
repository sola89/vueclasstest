import { GetterTree } from "vuex";
import { PostsState, RootState, Post } from "./types";


export const getters: GetterTree<PostsState, RootState> = {
    getPosts(state): Array<Post> {
        return state.posts
    }
}