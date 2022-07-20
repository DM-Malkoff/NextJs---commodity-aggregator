import api from "../api";
import {quantityProducts} from "../constants/config";

export const getProductsData = async (categoryId) => {
    return await api.get(
        `products?category=${categoryId}&per_page=${quantityProducts}`
    );
};
