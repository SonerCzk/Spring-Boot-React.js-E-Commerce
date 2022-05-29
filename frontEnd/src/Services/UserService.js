import httpClient from '../http-common';


const getAllUsers = () => {
    return httpClient.get('/admin/getAllUser');
}

const getUser = user_id =>{
    return httpClient.get(`/user/getUserById/${user_id}`);
}

export default { getAllUsers, getUser };