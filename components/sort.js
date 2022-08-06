import {useState} from "react";

const Sort = () => {
    const [sortClick, setSortCLick] = useState(false)

    const sortHandler = () => {
        setSortCLick(!sortClick)
    }

    return (
        <div className="shop_sorting_panel">
            <div className="sort_bl_wr">
                <div className={`sort_bl_in ${sortClick ? 'opened':''}`}>
                    <div className="sort_bl_title" onClick={sortHandler}>
                        <span>Сортировать по</span>
                    </div>
                    <div className="sort_bl_wrap" style={{display: `${sortClick?'block':'none'}`}}>
                        <div className="sort_body">
                            <div>
                                <a href="#" className="sort_param sort_param_desc"><span>Сначала дешевые</span></a>
                            </div>
                            <div>
                                <a href="#" className="sort_param sort_param_asc"><span>Сначала дорогие</span></a>
                            </div>
                            <div><a href="#" className="sort_reset active">Не сортировать</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter_popup_btn_wr">
                <div className="filter_popup_btn"><span>Фильтр</span></div>
            </div>
        </div>
    );
};

export default Sort;