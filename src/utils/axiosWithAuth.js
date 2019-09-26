import axios from 'axios';

const axiosWithAuth = () => {
    // Token sign-in will change to cookies at a later time.
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};

export default axiosWithAuth;