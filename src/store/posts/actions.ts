import { ActionTree } from 'vuex'
import axios from 'axios'
import { PostsState, RootState } from './types'

export const actions: ActionTree<PostsState, RootState> = {
    fetchPosts({ commit }): void {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const payload: PostsState = response && response.data
            commit('postsLoad', payload)
        })  
    }
}