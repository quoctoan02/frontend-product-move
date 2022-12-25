import axios from '../axios'

const userService = {
    handleLoginApi(username, password) {
        return axios.post('api/executive-board/auth/login', { username, password },
            {
                headers: {
                    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpdHkiOiJhZG1pbiIsImlhdCI6MTY3MTk2MTA4OCwiZXhwIjoxNjcyMDQ3NDg4fQ.P6-fZMhZao7uHduwiBKBKWpoAwzeANZsD-3VIOFZfYY`
                }
            });
    }
}

export default userService;