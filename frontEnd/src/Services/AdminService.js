import httpClient from '../http-common';


const getAllAdmins = () => {
    return httpClient.get('/admin/getAllAdmins');
}

const getAdmin = user_id =>{
    return httpClient.get(`/user/getAdminById/${user_id}`);
}

export default { getAllAdmins, getAdmin };