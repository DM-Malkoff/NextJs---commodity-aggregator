import Accordion from "./accordion";
import {useContext, useEffect, useState} from "react";
import {ShowFilterContext} from "../../context/context";

export default function Filter() {
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
            id: 1,
            title: 'Цена: (руб.)',
            categories: 'all',
            attribute: 'price',
        },
        {
            id: 5,
            title: 'Диаметр (D)',
            categories: [27],
            attribute: 'pa_diametr-d',
            attribute_term: [
                {
                    id: 47,
                    "name": "R12",
                    "slug": "12",
                    "description": "",
                    "menu_order": 0,
                    "count": 3,

                },
                {
                    id: 372,
                    "name": "R13",
                    "slug": "13",
                    "description": "",
                    "menu_order": 0,
                    "count": 50,
                },
                {
                    id: 179,
                    "name": "R14",
                    "slug": "14",
                    "description": "",
                    "menu_order": 0,
                    "count": 309,
                },
                {
                    id: 20,
                    "name": "R15",
                    "slug": "15",
                    "description": "",
                    "menu_order": 0,
                    "count": 1296,
                },
                {
                    id: 38,
                    "name": "R16",
                    "slug": "16",
                    "description": "",
                    "menu_order": 0,
                    "count": 2273,

                },
                {
                    id: 60,
                    "name": "R17",
                    "slug": "17",
                    "description": "",
                    "menu_order": 0,
                    "count": 2639,

                },
                {
                    id: 31,
                    "name": "R18",
                    "slug": "18",
                    "description": "",
                    "menu_order": 0,
                    "count": 1429,

                },
                {
                    id: 109,
                    "name": "R19",
                    "slug": "19",
                    "description": "",
                    "menu_order": 0,
                    "count": 678,
                },
                {
                    id: 187,
                    "name": "R20",
                    "slug": "20",
                    "description": "",
                    "menu_order": 0,
                    "count": 559,
                },
                {
                    id: 525,
                    "name": "R21",
                    "slug": "21",
                    "description": "",
                    "menu_order": 0,
                    "count": 199,
                },
                {
                    id: 647,
                    "name": "R22",
                    "slug": "22",
                    "description": "",
                    "menu_order": 0,
                    "count": 100,
                },
                {
                    id: 3775,
                    "name": "R23",
                    "slug": "23",
                    "description": "",
                    "menu_order": 0,
                    "count": 2,
                }
            ]
        },
        {
            id: 3,
            title: 'Тип диска',
            categories: [27],
            attribute: 'pa_tip-diska',
            attribute_term: [
                {
                    id: 2118,
                    "name": "Кованый",
                    "slug": "kovanyj",
                    "description": "",
                    "menu_order": 0,
                    "count": 19,
                },
                {
                    id: 18,
                    "name": "Литой",
                    "slug": "litoj",
                    "description": "",
                    "menu_order": 0,
                    "count": 9168,
                },
                {
                    id: 45,
                    "name": "Штампованный",
                    "slug": "shtampovannyj",
                    "description": "",
                    "menu_order": 0,
                    "count": 349,
                }
            ]
        }
        // {
        //     id: 2,
        //     title: 'Производитель:',
        //     content:
        //         <>
        //             <span className="param_val">Производитель №1</span>
        //             <span className="param_val">Производитель №2</span>
        //         </>
        //
        // },
        // {   id: 3,
        //     title: 'Сезон: ',
        //     content:
        //         <>
        //             <span className="param_val">Любой</span>
        //             <span className="param_val">Всесезонные</span>
        //             <span className="param_val">Лето</span>
        //             <span className="param_val">Зима</span>
        //         </>
        // },
        // {
        //     id:4,
        //     title: 'Тип автомобиля:',
        //     content:
        //         <>
        //             <span className="param_val">Легковой</span>
        //             <span className="param_val">Легкогрузовой</span>
        //             <span className="param_val">Внедорожник</span>
        //             <span className="param_val">Кроссовер</span>
        //         </>
        //
        // }
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