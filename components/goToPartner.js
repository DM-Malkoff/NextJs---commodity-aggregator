import Router from "next/router";

const GoToPartner = ({url, shopName}) => {

    const storeName = shopName.find(item => item.key == 'Магазин')

    function goToOuterTransition(link, data){
        event.preventDefault();
        localStorage.setItem('external-link',link)
        localStorage.setItem('shopName', storeName.value)
        Router.push('/gotoshop/');
    }

    return (
        <>
            <div className="shop_product_button" onClick={() => goToOuterTransition(url, shopName)}>
                <span>Купить в магазине {storeName.value}</span>
            </div>
        </>
    );
};

export default GoToPartner;