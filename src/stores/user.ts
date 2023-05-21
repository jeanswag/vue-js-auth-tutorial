import { computed, reactive } from 'vue'
import * as Request from '@/requests'

const state = reactive(
    {
        name: '',
        username: '',

        error: ''
    })

const getters =
{
    isLoggedIn: computed(() => state.username != null && state.username !== '' && state.username.length > 0)
}

const actions =
{
    async getUser() {
        const user = await Request.getUser();
        if (user != null) {
            state.name = user.name;
            state.username = user.username;
        }
    },

    async login(username: string, password: string) {
        let loggedIn = false;
        console.log(username + "" + password)
        const user = await Request.login(username, password)

        if (user == null) {
            state.error = 'Could not find user.'
        }
        else {

            state.name = user.name;
            state.username = username;
            state.error = ''

            loggedIn = true;
        }

        return loggedIn;
    },

    async logout() {
        state.name = ''
        state.username = ''

        console.log(getters.isLoggedIn)
    }
}

export default { state, getters, ...actions }