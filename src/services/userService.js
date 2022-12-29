import axios from '../axios'

const userService = {
    handleLoginApi(username, password, role) {
        return axios.post(`api/${role}/auth/login`, { username, password });
    }
}

export default userService;