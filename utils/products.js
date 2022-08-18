import api from "../api";
import {quantityProducts} from "../constants/config";

export const getProductsData = async (categoryId, numPage, qntProducts,orderby, order) => {
    if (numPage){
        return await api.get(
            `products?category=${categoryId}&page=${numPage}&per_page=${qntProducts}`
        );
    }
    else if (orderby){
        if (order){
            return await api.get(
                `products?category=${categoryId}&page=1&per_page=${quantityProducts}&orderby=${orderby}&order=${order}`
            );
        } else {
            return await api.get(
                `products?category=${categoryId}&page=1&per_page=${quantityProducts}&orderby=${orderby}`
            );
        }

    }
    else{
        return await api.get(
            `products?category=${categoryId}&page=1&per_page=${quantityProducts}`
        );
    }


};
