export const state = () => ({

    likes: []
    
})

export const getters = {

    likes : (state) => state.likes

}

export const mutations = {

    setLikes(state, payload) {
        state.likes = payload
    }

}

export const actions = {


    async create ({dispatch, commit}, payload){

        const {headers, data, error} = await this.$resource().post(`/api/likes`, payload)
        console.log(data)

    }
}
