export const state = () => ({

    posts: []
    
})

export const getters = {

    posts : (state) => state.posts

}

export const mutations = {

    setPosts(state, payload) {
        state.posts = payload
    }

}

export const actions = {

    async init ({dispatch, commit}){

        const {headers, data, error} = await this.$resource().get(`/api/posts`)
        commit('setPosts', data)

    }
    
}
