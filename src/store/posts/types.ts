export interface Post {
    id: number
    title: string
    body: string
    userId: number
}

export interface PostsState {
    posts: Array<Post>
}

export interface RootState {

}