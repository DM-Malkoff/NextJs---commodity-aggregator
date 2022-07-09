import api from "../api";

export const getProductsData = async (categoryId) => {
    return await api.get(
        `products?category=${categoryId}`
    );
};
