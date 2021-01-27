import { MutationTree } from 'vuex'
import { PostsState, Post } from './types'

export const mutations: MutationTree<PostsState> = {
    postsLoad(state, payload: Array<Post>) {
        state.posts = payload
    }
}