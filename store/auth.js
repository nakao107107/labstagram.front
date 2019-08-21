export const state = () => ({

    redirect_url: [],
    
})

export const mutations = {

    setRedirectUrl(state, payload) {
        state.redirect_url = payload
    },

    setToken(state, payload) {
        this.$cookies.set("token", payload, {path: '/'})
    },

    removeToken(state, payload) {
        this.$cookies.remove("token", {path: '/'})
    }

}

export const actions = {

    async login ({commit}){

        const {headers, data, error} = await this.$resource().get(`/oauth/login/redirect`)
        commit('setRedirectUrl', data)

    },

    async callback({commit}, query){

        const {headers, data, error} = await this.$resource().get(`/oauth/login/callback`, query)
        commit('setToken', data)

    },

    //getterでのcookieの使い方がよーわからんのでやむなし妥協
    getToken(){
        return this.$cookies.getAll().token || ''
    }

}