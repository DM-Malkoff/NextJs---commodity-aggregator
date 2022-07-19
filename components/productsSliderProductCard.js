import ProductCard from "./productCard";
import {useEffect, useState} from "react";

const ProductsSliderProductCard = ({relatedProducts}) => {

    const [indexEl, setSliderProductIndex] = useState(0)
    const visibleProduct = 4
    const [blockWidth, setBlockWidth] = useState(0)

    useEffect(() => {
        let productBlockWidth = Array.from(document.getElementsByClassName('shop2_product_item'))
        setBlockWidth(productBlockWidth[0].scrollWidth)
    },[])


    function handleArrow(direction){
        if (direction === 'left'){
            setSliderProductIndex(indexEl !== 0 ? indexEl - 1 : relatedProducts.length-visibleProduct)
        }
        if (direction === 'right') {
            setSliderProductIndex(indexEl !== relatedProducts.length-visibleProduct ? indexEl + 1 : 0)
        }
    }

    return (
        <div className="shop_group_kinds slick-initialized slick-slider">
            <button type="button" className="slick-prev slick-arrow slick-disabled" onClick={()=>handleArrow('left')}>
                Previous
            </button>
            <div className="slick-list">
                <div
                    id='relatedProductsSlider'
                    className="slick-track"
                    style={{transform:`translateX(-${blockWidth*indexEl}px)`, width: `${relatedProducts.length*blockWidth+20*relatedProducts.length}px`}}

                >
                    {relatedProducts.map((item,index) => {
                        return(
                            <ProductCard key={item.id} productData={item} indexEl={indexEl}/>
                        )

                    })}
                </div>
            </div>
            <button type="button" className="slick-next slick-arrow" onClick={()=>handleArrow('right')}>
                Next
            </button>
        </div>
    );
};

export default ProductsSliderProductCard;