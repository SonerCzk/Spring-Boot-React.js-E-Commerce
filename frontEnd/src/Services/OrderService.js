import httpClient from '../http-common';


const getAll = () => {
    return httpClient.get('/admin/orders');
}

const addOrder = (data) => {
    return httpClient.get('/admin/addOrder',data);
}


export default { getAll, addOrder};