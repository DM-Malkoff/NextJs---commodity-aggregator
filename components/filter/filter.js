import Accordion from "./accordion";
import {useContext, useEffect, useState} from "react";
import {ShowFilterContext} from "../../context/context";

export default function Filter({terms}) {
    const [showFilter, setShowFilter] = useState(false)
    const [showFilterContext, setShowFilterContext] = useContext(ShowFilterContext)

    useEffect(() => {
        if (showFilterContext === true){
            setShowFilter(true)
        }else{
            setShowFilter(false)
        }
    }, [showFilterContext])

    const closeFilterButton = () => {
        setShowFilterContext(false)
        setShowFilter(false)
    }

    const filterContent = [
        {
            id: 0,
            title: 'Цена: (руб.)',
            categories: 'all',
            attribute: 'price',
        },
        {
            id: 3,
            title: 'Тип диска',
            categories: [27],
            attribute: 'pa_tip-diska',
            attribute_term: terms.find((item) => item.id === 3).attribute_terms
        },
        {
            id: 4,
            title: 'Ширина обода, в дюймах',
            categories: [27],
            attribute: 'pa_shirina-diska',
            attribute_term: terms.find((item) => item.id === 4).attribute_terms
        },
        {
            id: 5,
            title: 'Диаметр (D)',
            categories: [27],
            attribute: 'pa_diametr-d',
            attribute_term: terms.find((item) => item.id === 5).attribute_terms
        },
        {
            id: 6,
            title: 'Вылет (ET)',
            categories: [27],
            attribute: 'pa_vylet-et',
            attribute_term: terms.find((item) => item.id === 6).attribute_terms
        },
        {
            id: 1,
            title: 'Производитель',
            categories: [27,956],
            attribute: 'pa_proizvoditel',
            attribute_term: terms.find((item) => item.id === 1).attribute_terms
        },
        {
            id: 2,
            title: 'Модель',
            categories: [27,956],
            attribute: 'pa_model',
            attribute_term: terms.find((item) => item.id === 2).attribute_terms
        }


    ]

    return (
        <div className={`mode_folder_filter ${showFilter ? 'active' : ''}`}
             onClick={() => {
                 setShowFilterContext(false)
                 setShowFilter(false)
            }}
        >
            <div className="filter_block_wrapper">
                <div className="filter_block_wrap" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="filter_block_close" onClick={()=> closeFilterButton()}>&nbsp;</div>
                    <div className="filter_block_title">Фильтр</div>
                    <form action="#" className="shop2-filter">
                        <div className="table-filter-param">
                            <Accordion filterContent={filterContent}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}