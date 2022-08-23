import api from "../api";

export const getAttributes = async ( ) => {
    return(
        await api.get(
            //'products/attributes/3/terms?per_page=99'
            //'products/attributes/7/terms?per_page=99'
            //'products?attribute=pa_tip-diska&attribute_term=3'
            //'products?attribute=pa_tip-diska&attribute_term=3'
            'products?min_price=80000'
        )
    )
};