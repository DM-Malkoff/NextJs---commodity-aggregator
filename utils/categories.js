import api from "../api";

export const getCategories = async ( ) => {
    return await api.get(
        'products/categories'
    );
};
