import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {visibleProductsMainSlider} from "../constants/config";

const PopularProductsSlider = ({data,caption}) => {
    const visibleProduct = visibleProductsMainSlider
    const [indexEl, setSliderPopularIndex] = useState(0)

    const handleArrow = (direction) => {
        if (direction === 'left') {
            setSliderPopularIndex(indexEl !== 0 ? indexEl - 1 : data.length-visibleProduct)
        }
        if (direction === 'right') {
            setSliderPopularIndex(indexEl !== data.length-visibleProduct ? indexEl + 1 : 0)
        }
    }

    return (
        <div>
            <div className="popular__block__wrapper">
                <div className="popular__block__wrap">
                    <div className="block__title">{caption}</div>
                    <div className="block__slider">
                        <div className="prod_list_wrap">
                            <button type="button" className="slick-prev slick-arrow" onClick={()=>handleArrow('left')}>Previous</button>
                            <div className="slick-list draggable">
                                <div className="slick-track" style={{transform:`translateX(${-245*indexEl}px)`}}>
                                    {data.map(product =>
                                        <div key={product.id} className="main__block__item slick-slide" >
                                            <form className="shop2-product-item">
                                                <div className="product__image">
                                                    <Link href={
                                                        {
                                                            pathname:`/p/${product.slug}`,
                                                            query: {
                                                                id:product.id
                                                            }
                                                        }
                                                    }>
                                                    <a>
                                                        <Image

                                                            src={product.images.length ? product.images[0].src : '/images/no_image.png'}
                                                            alt={product.name}
                                                            width={200}
                                                            height={200}
                                                        />
                                                    </a>
                                                    </Link>
                                                </div>
                                                <div className="product__name">
                                                    <Link href={
                                                        {
                                                            pathname:`/p/${product.slug}`,
                                                            query: {
                                                                id:product.id
                                                            }
                                                        }
                                                    }>
                                                        <a>{product.name}</a>
                                                    </Link>
                                                </div>
                                                <div className="product__price">
                                                    <div className="price-old question">
                                                        <span><strong>{product.regular_price}</strong> руб.</span>
                                                    </div>
                                                    <div className="price-current">
                                                        <strong>{product.sale_price}</strong> руб.
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                            <button type="button" className="slick-next slick-arrow" onClick={()=>handleArrow('right')}>Next</button>
                            <ul className="slick-dots">
                                {data.map((product,index) => {
                                    if (index < data.length-visibleProduct+1){
                                        return(
                                            <li key={product.id} className={indexEl == index?'slick-active':''}>
                                                <button type="button">{index}</button>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProductsSlider;