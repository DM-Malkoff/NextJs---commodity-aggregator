import ProductCard from "./productCard";
import {useEffect, useState} from "react";
import {visibleSliderProducts} from "../constants/config";

const ProductsSliderProductCard = ({relatedProducts}) => {

    const [indexEl, setSliderProductIndex] = useState(0)
    const visibleProducts = visibleSliderProducts
    const [blockWidth, setBlockWidth] = useState(0)
    const [marginItem, setMarginItem] = useState(0)

    useEffect(() => {
        let productBlockWidth = Array.from(document.getElementsByClassName('shop2_product_item'))
        setBlockWidth(productBlockWidth[0].scrollWidth)
    },[])


    function handleArrow(direction){
        if (direction === 'left'){
            setSliderProductIndex(indexEl !== 0 ? indexEl - 1 : relatedProducts.length-visibleProducts)
            setMarginItem(30)
        }
        if (direction === 'right') {
            setSliderProductIndex(indexEl !== relatedProducts.length-visibleProducts ? indexEl + 1 : 0)
            setMarginItem(30)
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
                    style={{transform:`translateX(-${(blockWidth+marginItem)*indexEl}px)`, width: `${(relatedProducts.length*blockWidth)+(30*relatedProducts.length)}px`}}
                >
                    {relatedProducts.map((item) => {
                        return(
                            <ProductCard key={item.id} productData={item}/>
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