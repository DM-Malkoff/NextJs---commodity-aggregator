import api from "../api";

export const getProductsData = async ( ) => {
    return await api.get(
        'products?filter[limit] =-1'
    );
};
