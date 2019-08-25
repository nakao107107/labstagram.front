export const state = () => ({

    likes: []
    
})

export const getters = {

    likes : (state) => state.likes,

    like_post  : (state) => (conditions) => {
        return state.likes.filter(like => like.post_id === conditions.post_id)
    },

    like_user_post  : (state) => (conditions) => {

        return state.likes.filter(like => like.post_id === conditions.post_id)
        .filter(like => like.user_id === conditions.user_id)
        
    }

}

export const mutations = {

    setLikes(state, payload) {
        state.likes = payload
    }

}

export const actions = {

    async init ({commit}){

        const {headers, data, error} = await this.$resource().get(`/api/likes`)

        if(error) {
            throw new Error()
        }
        
        commit('setLikes', data)

    },

    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/likes`, payload)

        console.log(data)

        if(error) {
            throw new Error()
        }

    }
}
