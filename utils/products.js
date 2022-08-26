import api from "../api";
import {quantityProducts} from "../constants/config";

export const getProductsData = async (queries,categoryId, numPage, qntProducts,orderby, order) => {
    console.log("333",queries)

    const {slug: _, ...apiQueries} = queries

    let apiString = `products?per_page=${quantityProducts}&`
    let counter = 1
    let myKey = ''
    for (const key in apiQueries){
        myKey = key
        if (myKey == 'id'){
            myKey = 'category'
        }
        counter++

        if (counter != queries.length){
            apiString = apiString+myKey+'='+queries[key]+'&'
        }else{
            apiString = apiString+myKey+'='+queries[key]
        }
    }
    console.log('444', apiString)
    return await api.get(
        `${apiString}`
    );


    // if (numPage){
    //     return await api.get(
    //         `products?category=${categoryId}&page=${numPage}&per_page=${qntProducts}`
    //     );
    // }
    // else if (orderby){
    //     if (order){
    //         return await api.get(
    //             `products?category=${categoryId}&page=1&per_page=${quantityProducts}&orderby=${orderby}&order=${order}`
    //         );
    //     } else {
    //         return await api.get(
    //             `products?category=${categoryId}&page=1&per_page=${quantityProducts}&orderby=${orderby}`
    //         );
    //     }
    //
    // }
    // else{
    //     return await api.get(
    //         `products?category=${categoryId}&page=1&per_page=${quantityProducts}`
    //     );
    // }


};
