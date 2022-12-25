import axios from '../axios';
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */

    createAccount(username, password, role) {
        return axios.post(`api/executive-board/provide-account/${role}`, { username, password },
            {
                headers: {
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpdHkiOiJhZG1pbiIsImlhdCI6MTY3MTk4MjA3OSwiZXhwIjoxNjcyMDY4NDc5fQ.2jNKYaE-sOih2u-oHOxcyOgxzgPuEyXca90qJG-u7Z8`
                }
            })
    }

};

export default adminService;