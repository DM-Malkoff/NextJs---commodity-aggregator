import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Sort = () => {
    const router = useRouter()
    const [sortClick, setSortCLick] = useState(false)
    const [sortTitle, setSortTitle] = useState('Сортировать по')
    const [selectedSortType, setSelectedSortType] = useState('')
    const sortTypes = [
        {sortName: 'price', sortType: 'desc', sortText: 'Сначала дорогие'},
        {sortName: 'price', sortType: 'asc', sortText: 'Сначала дешевые'},
        {sortName: '', sortType: 'clear', sortText: 'Не сортировать'}
    ]
    useEffect(() => {
        const sortBlock = document.getElementById('sort_block')
        document.addEventListener("click", (e) => {
            const withinBoundaries = e.composedPath().includes(sortBlock)
            if (!withinBoundaries) {
                setSortCLick(false)
            }
        })
    }, [])
    useEffect(()=>{
        setSortTitle(sortTypes.find(item => item.sortType === router.query.order)?.sortText||'Сортировать по')
        if (router.query.order){
            setSelectedSortType(router.query.order)
        } else {
            setSelectedSortType('clear')
        }
    },[router.query.order])

    const sortHandler = () => {
        setSortCLick(!sortClick)
    }

    const sortTypeHandler = (sortName,sortType) => {
        setSortCLick(false)
        setSelectedSortType(sortType)
        if (sortType === 'clear') {
            router.push({
                pathname: router.query.slug,
                query: {
                    id: router.query.id
                }
            })
            setSortTitle('Сортировать по')
        } else {
            router.push({
                pathname: router.query.slug,
                query: {
                    id: router.query.id,
                    orderby: sortName,
                    order: sortType
                }
            })
            setSortTitle(sortTypes.find((item => item.sortType == sortType)).sortText)
        }
    }

    return (
        <div className="shop_sorting_panel" id="sort_block">
            <div className="sort_bl_wr">
                <div className={`sort_bl_in ${sortClick ? 'opened' : ''}`}>
                    <div className="sort_bl_title" onClick={sortHandler}>
                        <span>{sortTitle}</span>
                    </div>
                    <div className="sort_bl_wrap" style={{display: `${sortClick ? 'block' : 'none'}`}}>
                        <div className="sort_body">
                            {sortTypes.map((item) => {
                                return (
                                    <div key={item.sortText}>
                                        <span
                                            className={`sort_param ${selectedSortType === item.sortType ? 'active' : ''}`}>
                                            <span onClick={() => sortTypeHandler(item.sortName,item.sortType)}>{item.sortText}</span>
                                        </span>
                                    </div>
                                )
                            })}
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