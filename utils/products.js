import api from "../api";
import {quantityProducts} from "../constants/config";

export const getProductsData = async (categoryId, numPage) => {
    if (numPage){
        return await api.get(
            `products?category=${categoryId}&page=${numPage}&per_page=${quantityProducts}`
        );
    }
    else{
        return await api.get(
            `products?category=${categoryId}&page=1&per_page=${quantityProducts}`
        );
    }


};
