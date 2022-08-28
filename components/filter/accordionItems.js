import {useContext, useEffect, useState} from "react";
import {FilterDataContext} from "../../context/context";
import {useRouter} from "next/router";

const AccordionItems = ({item, index, onPress}) => {
    const router = useRouter()
    const minPriceValue = router.query.min_price ? router.query.min_price: 'от'
    const maxPriceValue = router.query.max_price ? router.query.max_price: 'до'

    const [filterContext, setFilterContext] = useContext(FilterDataContext)

    const [filterOptions, setFilterOptions] = useState({})

    const [isShow, setIsShow] = useState(index == 0 ? true : false)

    function itemClick() {
        setIsShow(!isShow)
    }

    useEffect(() => {
        setFilterContext(filterOptions)
    }, [filterOptions])

    function handlerMinPrice(event) {
        setFilterOptions({...filterOptions, min_price: event.target.value})
    }

    function handlerMaxPrice(event) {
        setFilterOptions({...filterOptions, max_price: event.target.value})
    }

    return (
        <div className={`shop_filter_field ${isShow ? 'active' : ''}`} onClick={itemClick}>
            <div className="filter_field_title">{item.title}</div>
            <div className={`filter_field_body ${index === 0 ? 'range' : ''}`}>
                <div className="filter_field_content">
                    {item.type == 'price' ?
                        <>
                            <div className="input_from">
                                <input
                                    placeholder={minPriceValue}

                                    type="number"
                                    onChange={handlerMinPrice}
                                    onClick={(event) => {
                                        event.stopPropagation()
                                    }}
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter'){
                                            onPress()
                                        }
                                    }}
                                />
                            </div>
                            <div className="input_to">
                                <input
                                    placeholder={maxPriceValue}
                                    type="number"
                                    onChange={handlerMaxPrice}
                                    onClick={(event) => {
                                       event.stopPropagation()
                                    }}
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter'){
                                            onPress()
                                        }
                                    }}
                                />
                            </div>
                        </>
                        :
                        item.content
                    }
                </div>
            </div>
        </div>
    );
};

export default AccordionItems;