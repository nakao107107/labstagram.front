export const state = () => ({

    posts : [],
    page  : 1,
    limit : 1,
    total : 0,
    
})

export const getters = {

    posts : (state) => state.posts,
    pager: (state) =>{
        return {
            page      : state.page,
            total     : state.total,
            limit     : state.limit
        }
    },

}

export const mutations = {

    initState(state){
        state.items      = []
        state.page       = 1
        state.limit      = 12
        state.total      = 0
    },

    setPage(state, payload) {
        state.page = payload
    },

    setPosts(state, payload) {
        state.posts = payload
    },

    setTotal(state, payload) {
        state.total = payload
    }

}

export const actions = {

    async init ({state, dispatch, commit}){

        commit('initState')

        const query = {
            page     : state.page,
            limit    : state.limit
        }

        await dispatch('search', query)

    },

    async search({commit}, query){

        const {headers, data, error} = await this.$resource().get(`/api/posts`, query)

        if(error) {
            throw new Error()
        }

        //件数を格納
        commit('setTotal', parseInt(headers['x-total-count']))

        commit('setPosts', data)

    },

    async changePage({state, commit, dispatch}, page){

        commit('initCases')
        commit('setPage', page)

        const params = {
            page     : state.page,
            limit    : state.limit
        }

        await dispatch('search', params)

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
