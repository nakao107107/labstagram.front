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

        if(error) {
            throw new Error()
        }

        commit('setPosts', data)

    },

    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/posts`, payload)

        if(error) {
            throw new Error()
        }

    },

    async delete ({dispatch, commit}, post_id){

        const {headers, data, error} = await this.$resource().delete(`/api/posts/${post_id}`)

        if(error) {
            throw new Error()
        }

    },

}
