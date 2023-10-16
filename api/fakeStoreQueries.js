import { fakeStoreAPI } from "./fakestoreService";

export const getProducts  = async () => {
    try {
        const response = await fakeStoreAPI.get("/products");
        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
        }
}

export const getProductByID  = async (product_id) => {
    try {
        const response = await fakeStoreAPI.get(`/products/${product_id}`);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
        }
}

export const createProduct  = async (data) => {
    try {
        const response = await fakeStoreAPI.post("/products",{ data });
        return response.data;

    } catch (error) {
        console.log(error.response.data.message);
        }
}
export const deleteProduct  = async (product_id) => {
    try {
        const response = await fakeStoreAPI.delete(`/products/${product_id}`);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
        }
}
export const editProduct = async (product_id, updatedData) => {
    try {
        const response = await fakeStoreAPI.put(`/products/${product_id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
}