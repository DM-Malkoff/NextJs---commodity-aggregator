import Accordion from "./accordion";

export default function Filter(){
    const filterContent = [
        {
            id: 1,
            title: 'Цена: (руб.)',
            type: 'price',
        },
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

    return(
        <div className="mode_folder_filter">
            <div className="filter_block_wrapper">
                <div className="filter_block_wrap">
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