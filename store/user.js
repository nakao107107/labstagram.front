export const state = () => ({

    user: {},
    current_user: {}
    
})

export const getters = {

    user         : (state) => state.user,
    current_user : (state) => state.current_user,


}

export const mutations = {

    setUser(state, payload) {
        state.user = payload
    },

    setCurrentUser(state, payload) {
        state.current_user = payload
    }

}

export const actions = {

    async init ({dispatch, commit}, id){

        const {headers, data, error} = await this.$resource().get(`/api/users/${id}`)
        commit('setUser', data)


    },

    async initCurrent ({dispatch, commit}, id){

        const {headers, data, error} = await this.$resource().get(`/api/user`)
        //ここは取れない可能性があるので、エラーハンドリングの際は注意
        commit('setCurrentUser', data)

    },



    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/likes`, payload)

    }
}