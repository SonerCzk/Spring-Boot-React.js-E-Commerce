import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/admin/categories');
}

const addCategory = (data) => {
    return httpClient.get('/admin/addCategory',data);
}

const getCategory = productId =>{
    return httpClient.get(`/admin/getProductById/${productId}`);
}



const deleteCategory = cat_id => {
    return httpClient.delete(`/admin/deleteCategory/${cat_id}`);
}

export default { getAll, addCategory, getCategory , deleteCategory};