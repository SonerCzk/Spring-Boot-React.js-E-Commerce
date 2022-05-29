import httpClient from '../http-common';


const getAll = () => {
    return httpClient.get('/admin/products');
}

const addProduct = (data) => {
    return httpClient.get('/admin/products',data);
}

const getProduct = productId =>{
    return httpClient.get(`/admin/getProductById/${productId}`);
}

const getProductByCategory = categoryId =>{
    return httpClient.get(`/admin/productsByCategory?category=${categoryId}`);
}

const updateProduct = data => {
    return httpClient.get('/admin/updateProducts', data);
}

const deleteProduct = productId => {
    return httpClient.delete(`/admin/deleteProductById/${productId}`);
}

export default { getAll, addProduct, updateProduct, getProduct, deleteProduct, getProductByCategory };