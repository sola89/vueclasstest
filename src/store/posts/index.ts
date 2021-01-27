import { Module } from 'vuex';
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutautions'
import { state } from './state'
import { PostsState, RootState } from './types';

const namespaced = true

export const posts: Module<PostsState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
