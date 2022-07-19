import Router from "next/router";

const GoToPartner = ({url, shopName}) => {
    function goToOuterTransition(link, data){
        event.preventDefault();
        localStorage.setItem('external-link',link)
        const shopName = data.find(item => item.key == 'Магазин')
        localStorage.setItem('shopName', shopName.value)
        Router.push('/gotoshop/');
    }

    return (
        <>
            <div className="shop_product_button" onClick={() => goToOuterTransition(url, shopName)}>
                <span>Купить</span>
            </div>
        </>
    );
};

export default GoToPartner;