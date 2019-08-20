export const state = () => ({

    likes: []
    
})

export const getters = {

    likes : (state) => state.likes,
    like_el  : (state) => (conditions) => {
        return state.likes.filter(like => like.post_id === conditions.post_id)
    }

}

export const mutations = {

    setLikes(state, payload) {
        state.likes = payload
    }

}

export const actions = {

    async init ({dispatch, commit}){

        const {headers, data, error} = await this.$resource().get(`/api/likes`)
        commit('setLikes', data)

    },

    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/likes`, payload)

    }
}
