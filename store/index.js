export const state = () => ({
})

export const mutations = {
}

export const actions = {

    /*
    init
    */
    async nuxtServerInit({ dispatch, commit }, { app, req, route, redirect, error }) {

        await dispatch('user/initCurrent')
        dispatch('auth/syncCookies')

    }

}