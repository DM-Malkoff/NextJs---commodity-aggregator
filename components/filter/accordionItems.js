import {useEffect, useState} from "react";

const AccordionItems = ({item, index}) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const [isShow, setIsShow] = useState(index == 0 ? true : false)

    function itemClick() {
        setIsShow(!isShow)
    }
    useEffect(()=>{
        console.log(minPrice)
    },[minPrice])

    return (
        <div className={`shop_filter_field ${isShow ? 'active' : ''}`} onClick={itemClick}>
            <div className="filter_field_title">{item.title}</div>
            <div className={`filter_field_body ${index === 0 ? 'range' : ''}`}>
                <div className="filter_field_content">
                    {item.type == 'price' ?
                        <>
                            <div className="input_from">
                                <input placeholder="от" className="shop2-input-float" type="text"
                                       onChange={(event) => setMinPrice(event.target.value)}
                                       onClick={(event) => {event.stopPropagation()}}
                                />
                            </div>
                            <div className="input_to">
                                <input placeholder="до" type="text"
                                       onChange={(event) => setMaxPrice(event.target.value)}
                                       onClick={(event) => {event.stopPropagation()}}
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