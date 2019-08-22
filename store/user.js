export const state = () => ({

    user: []
    
})

export const getters = {

    user : (state) => state.user

}

export const mutations = {

    setUser(state, payload) {
        state.user = payload
    }

}

export const actions = {

    async init ({dispatch, commit}, id){

        const {headers, data, error} = await this.$resource().get(`/api/users/${id}`)
        commit('setUser', data)


    },

    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/likes`, payload)

    }
}