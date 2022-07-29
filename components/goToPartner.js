import Router from "next/router";

const GoToPartner = ({url, shopName}) => {

    // const storeName = shopName.find(item => item.key == 'shop_name')

    function goToOuterTransition(link, data){
        event.preventDefault();
        localStorage.setItem('external-link',link)
        localStorage.setItem('shopName', shopName)
        Router.push('/gotoshop/');
    }

    return (
        <>
            <div className="shop_product_button" onClick={() => goToOuterTransition(url, shopName)}>
                <span>Купить в магазине {shopName}</span>
            </div>
        </>
    );
};

export default GoToPartner;