import {useState} from "react";
import styles from '../styles/sort.module.scss'

const Sort = () => {
    const [sortClick, setSortCLick] = useState(false)

    const sortHandler = () => {
        setSortCLick(!sortClick)
    }

    return (
        <div className={styles.shop_sorting_panel}>
            <div className={styles.sort_bl_wr}>
                <div className={[styles.sort_bl_in, `${sortClick ? styles.opened:''}`].join(' ')}>
                    <div className={styles.sort_bl_title} onClick={sortHandler}>
                        <span>Сортировать по</span>
                    </div>
                    <div className={styles.sort_bl_wrap} style={{display: `${sortClick?'block':'none'}`}}>
                        <div className={styles.sort_body}>
                            <div>
                                <a href="#" className={[styles.sort_param,styles.sort_param_desc].join(' ')}><span>Сначала дешевые</span></a>
                            </div>
                            <div>
                                <a href="#" className={[styles.sort_param,styles.sort_param_asc].join(' ')}><span>Сначала дорогие</span></a>
                            </div>
                            <div><a href="#" className={[styles.sort_reset,styles.active].join(' ')}>Не сортировать</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sort;