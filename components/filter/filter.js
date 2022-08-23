import {useEffect, useState} from "react";
import Accordion from "./accordion";

export default function Filter(){

    const filterContent = [
        {
            title: 'Цена: (руб.)',
            type: 'price',
        },
        {
            title: 'Производитель:',
            content:
                <>
                    <span className="param_val">Производитель №1</span>
                    <span className="param_val">Производитель №2</span>
                </>

        },
        {
            title: 'Сезон: ',
            content:
                <>
                    <span className="param_val">Любой</span>
                    <span className="param_val">Всесезонные</span>
                    <span className="param_val">Лето</span>
                    <span className="param_val">Зима</span>
                </>
        },
        {
            title: 'Тип автомобиля:',
            content:
                <>
                    <span className="param_val">Легковой</span>
                    <span className="param_val">Легкогрузовой</span>
                    <span className="param_val">Внедорожник</span>
                    <span className="param_val">Кроссовер</span>
                </>

        }
    ]
    const filterHandler = () => {

    }
    const [minPrice, setMinPrice] = useState(0)
    const [msxPrice, setMaxPrice] = useState(0)

    return(
        <div className="mode_folder_filter">
            <div className="filter_block_wrapper">
                <div className="filter_block_wrap">
                    <div className="filter_block_title">Фильтр</div>
                    <form action="#" className="shop2-filter">
                        <div className="table-filter-param">
                            <Accordion filterContent={filterContent}/>
                        </div>

                        <div className="filter_buttons_wrap">
                            {/*<span className="result">Подобрано <ins id="filter-result">0 товаров</ins></span>*/}
                            <div className="filter_buttons">
                                <span className="shop_btn shop2-filter-go" onClick={filterHandler}>Показать</span>
                                <span className="shop_btn reset">Очистить</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}