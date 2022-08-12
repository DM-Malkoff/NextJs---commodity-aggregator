import Router from "next/router";
import {partnerLink} from "../constants/config";

const GoToPartner = ({url, shopName}) => {
    function goToOuterTransition(){
        const  link = partnerLink.find(item => item.shopName === shopName).shopLink
        event.preventDefault();
        localStorage.setItem('external-link',link+url)
        localStorage.setItem('shopName', shopName)
        Router.push('/gotoshop/');
    }

    return (
        <>
            <div className="shop_product_button" onClick={() => goToOuterTransition()}>
                <span>Купить в магазине {shopName}</span>
            </div>
        </>
    );
};

export default GoToPartner;