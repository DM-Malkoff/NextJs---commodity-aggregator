import AccordionItems from "./accordionItems";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Context} from "../../context/context";

const Accordion = ({filterContent}) => {
    const router = useRouter()
    const {slug: _, ...routerQueries} = router.query
    const [filterContext, setFilterContext] = useContext(Context)
    const filterSearchHandler = () => {
        router.push({
            pathname:router.query.slug,
            query: {...routerQueries, ...filterContext}
        })
    }
    const filterClearFilter = () => {
        router.push({
            pathname: router.query.slug,
            query: {
                id: router.query.id
            }
        })
    }
    const renderedFilterContent = filterContent.map((item,index) => {
        return (
            <div key={item.id}>
                <AccordionItems
                    item = {item}
                    index = {index}
                    onPress = {()=>{
                        filterSearchHandler()
                    }}
                />
                <div className="filter_buttons_wrap">
                    <div className="filter_buttons">
                        <span className="shop_btn shop2-filter-go" onClick={filterSearchHandler}>Показать</span>
                        <span className="shop_btn reset" onClick={filterClearFilter}>Очистить</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {renderedFilterContent}
        </>
    );
};

export default Accordion;