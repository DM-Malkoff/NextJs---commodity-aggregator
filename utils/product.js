import api from "../api";

export async function getProductData(productId){
    return await api.get(
        `products/categories/<${productId}>`
    );
};
