import styles from "../styles/searchBlock.module.scss"
import {useState} from "react";
const SearchBlock = () =>{
        const [clickedMoreButton,setClickedMoreButton] = useState(false)
        const moreButtonClick = () => {
            setClickedMoreButton(!clickedMoreButton)
        }
        // const buttonMore = document.getElementById('more__fields')
        // const hiddenRows = Array.from(document.getElementsByClassName('hidden__rows'))
        // const searchField = document.getElementById('search__fields__wrap')
        // buttonMore.addEventListener('click',()=>{
        //     buttonMore.classList.toggle('active')
        //     for(let i=0; i<hiddenRows.length;i++){
        //         hiddenRows[i].classList.toggle('show__rows');
        //     }
        //     searchField.style.height = buttonMore.classList.contains('active') ?  searchField.scrollHeight + 'px' : '133px';
        //     console.log(searchField.clientHeight)
        // })
     //}
    return(
        <div className={styles.search__block__wrapper}>
            <div className={styles.search__block__wrap}>
                <form>
                    <span className={styles.search__mobile__close}>Закрыть</span>
                    <div className={styles.search__mobile__title}>Расширенный поиск</div>
                    <div className={styles.folders__field__wrap}>
                        <div className={styles.folders__field} id="s[folder_id]">
                            <label className={styles.first_cat_label}>
                                <input type="radio" name="s[folder_id]" />
                                <span>Все</span>
                            </label>
                            <label className={styles.checked}>
                                <input type="radio" value="72074661" name="s[folder_id]" />
                                <span>Шины</span>
                            </label>
                            <label>
                                <input type="radio" value="72075061" name="s[folder_id]" />
                                <span>Диски</span>
                            </label>
                        </div>
                    </div>
                    <div className={[styles.search__fields__wrap, `${clickedMoreButton ? 'show_search__fields__wrap':''}`].join(' ')}>
                        <div className={styles.row}>
                            <div className={styles.row__title}>Цена, руб.</div>
                            <div className={styles.row__body}>
                                <div className={styles.input__left}>
                                    <input placeholder="от" name="s[price][min]" type="text" size="5"
                                           className={styles.small} />
                                </div>
                                <div className={styles.input__right}>
                                    <input placeholder="до" name="s[price][max]" type="text" size="5" className={styles.small} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.row__body}>
                                <input type="text" placeholder="Название" name="s[name]" size="20"
                                       id="shop2-name" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.row__body}>
                                <div data-placeholder="Производитель" className={styles.jqselect}>
                                    <select name="s[vendor_id]" data-placeholder="Производитель">
                                        <option>Все</option>
                                        <option>Производитель №1</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                        <option>Производитель №10</option>
                                    </select>
                                    <div className={styles.jq_selectbox__select}>
                                        <div className={styles.jq_selectbox__select_text+''+styles.placeholder}>
                                            Производитель
                                        </div>
                                    </div>
                                    <div className={styles.jq_selectbox__dropdown}>
                                        <ul>
                                            <li className={styles.selected+''+styles.sel}>Все</li>
                                            <li>Производитель №1</li>
                                            <li>Производитель №10</li>
                                            <li>Производитель №11</li>
                                            <li>Производитель №12</li>
                                            <li>Производитель №13</li>
                                            <li>Производитель №14</li>
                                            <li>Производитель №15</li>
                                            <li>Производитель №16</li>
                                            <li>Производитель №17</li>
                                            <li>Производитель №18</li>
                                            <li>Производитель №19</li>
                                            <li>Производитель №2</li>
                                            <li>Производитель №20</li>
                                            <li>Производитель №21</li>
                                            <li>Производитель №22</li>
                                            <li>Производитель №23</li>
                                            <li>Производитель №24</li>
                                            <li>Производитель №25</li>
                                            <li>Производитель №26</li>
                                            <li>Производитель №3</li>
                                            <li>Производитель №4</li>
                                            <li>Производитель №5</li>
                                            <li>Производитель №6</li>
                                            <li>Производитель №7</li>
                                            <li>Производитель №8</li>
                                            <li>Производитель №9</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.row,styles.text,styles.active].join(' ')}>
                            <input placeholder="Поиск по тексту" type="text" name="search_text"
                                   size="20" id="shop2-text" />
                        </div>
                        <div className={styles.row__buttons}>
                            <div className={styles.row__buttons__in}>
                                <span className={styles.more__fields} onClick={moreButtonClick}>Еще</span>
                                <button type="submit" className={styles.search__btn}>Подобрать</button>
                            </div>
                        </div>
                        <div className={[styles.row,`${clickedMoreButton ? 'show__rows':'hidden__rows'}`].join(' ')}>
                            <div className={styles.row__body}>
                                <div data-placeholder="Новинка" className={[styles.jq_selectbox,styles.jqselect].join(' ')}>
                                    <select data-placeholder="Новинка" name="s[flags][2]">
                                        <option>Все</option>
                                        <option value="1">да</option>
                                        <option value="0">нет</option>
                                    </select>
                                    <div className={styles.jq_selectbox__select}>
                                        <div className={[styles.jq_selectbox__select_text,styles.placeholder].join(' ')}>Новинка</div>
                                    </div>
                                    <div className={styles.jq_selectbox__dropdown}>
                                        <ul>
                                            <li className={[styles.selected,styles.sel].join(' ')}>Все</li>
                                            <li>да</li>
                                            <li>нет</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.row,`${clickedMoreButton ? 'show__rows':'hidden__rows'}`].join(' ')}>
                            <div className={styles.row__body}>
                                <div data-placeholder="Спецпредложение"
                                     className={[styles.jq_selectbox,styles.jqselect].join(' ')}>
                                    <select data-placeholder="Спецпредложение" name="s[flags][1]">
                                        <option>Все</option>
                                        <option value="1">да</option>
                                        <option value="0">нет</option>
                                    </select>
                                    <div className={styles.jq_selectbox__select}>
                                        <div className={[styles.jq_selectbox__select_text,styles.placeholder].join(' ')}>Спецпредложение
                                        </div>
                                    </div>
                                    <div className={styles.jq_selectbox__dropdown}>
                                        <ul>
                                            <li className={[styles.selected,styles.sel].join(' ')}>Все</li>
                                            <li>да</li>
                                            <li>нет</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.row,`${clickedMoreButton ? 'show__rows':'hidden__rows'}`].join(' ')}>
                            <div className={styles.row__title}>Результатов на странице</div>
                            <div className={styles.row__body}>
                                <div data-placeholder="Результатов на странице"
                                     className={[styles.jq_selectbox,styles.jqselect].join(' ')}>
                                    <select data-placeholder="Результатов на странице"
                                            name="s[products_per_page]">
                                        <option value="5">5</option>
                                        <option value="20">20</option>
                                        <option value="35">35</option>
                                        <option value="50">50</option>
                                        <option value="65">65</option>
                                        <option value="80">80</option>
                                        <option value="95">95</option>
                                    </select>
                                    <div className={styles.jq_selectbox__select}>
                                        <div className={styles.jq_selectbox__select_text}>5
                                        </div>
                                    </div>
                                    <div className={styles.jq_selectbox__dropdown}>
                                        <ul>
                                            <li className={[styles.selected,styles.sel].join(' ')}>5</li>
                                            <li>20</li>
                                            <li>35</li>
                                            <li>50</li>
                                            <li>65</li>
                                            <li>80</li>
                                            <li>95</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*<div id="shop2_search_custom_fields">*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">*/}
                        {/*            Сезон:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Сезон" className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Сезон" name="s[sezon]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55797061">Любой</option>*/}
                        {/*                    <option value="55797261">Всесезонные</option>*/}
                        {/*                    <option value="55797461">Лето</option>*/}
                        {/*                    <option value="55797661">Зима</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">Сезон*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>Любой</li>*/}
                        {/*                        <li>Всесезонные</li>*/}
                        {/*                        <li>Лето</li>*/}
                        {/*                        <li>Зима</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Тип*/}
                        {/*            автомобиля:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Тип автомобиля"*/}
                        {/*                 className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Тип автомобиля"*/}
                        {/*                        name="s[tip_avtomobila]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55800861">Легковой</option>*/}
                        {/*                    <option value="56532661">Легкогрузовой</option>*/}
                        {/*                    <option value="56533861">Внедорожник</option>*/}
                        {/*                    <option value="56535061">Кроссовер</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">*/}
                        {/*                        Тип автомобиля*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>Легковой</li>*/}
                        {/*                        <li>Легкогрузовой</li>*/}
                        {/*                        <li>Внедорожник</li>*/}
                        {/*                        <li>Кроссовер</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Диаметр:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Диаметр" className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Диаметр" name="s[diametr]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55798261">14"</option>*/}
                        {/*                    <option value="56329861">16"</option>*/}
                        {/*                    <option value="56535661">17"</option>*/}
                        {/*                    <option value="56534261">18"</option>*/}
                        {/*                    <option value="55801261">19"</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">Диаметр*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>14"</li>*/}
                        {/*                        <li>16"</li>*/}
                        {/*                        <li>17"</li>*/}
                        {/*                        <li>18"</li>*/}
                        {/*                        <li>19"</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Ширина профиля:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Ширина профиля"*/}
                        {/*                 className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Ширина профиля"*/}
                        {/*                        name="s[sirina_profila]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="56532861">165 мм.</option>*/}
                        {/*                    <option value="56328661">175 мм.</option>*/}
                        {/*                    <option value="56534861">185 мм.</option>*/}
                        {/*                    <option value="56533261">195 мм.</option>*/}
                        {/*                    <option value="56533661">215 мм.</option>*/}
                        {/*                    <option value="56330061">225 мм.</option>*/}
                        {/*                    <option value="56535261">235 мм.</option>*/}
                        {/*                    <option value="56534661">245 мм.</option>*/}
                        {/*                    <option value="56534061">255 мм.</option>*/}
                        {/*                    <option value="55799661">275 мм.</option>*/}
                        {/*                    <option value="56534461">285 мм.</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">Ширина*/}
                        {/*                        профиля*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>165 мм.</li>*/}
                        {/*                        <li>175 мм.</li>*/}
                        {/*                        <li>185 мм.</li>*/}
                        {/*                        <li>195 мм.</li>*/}
                        {/*                        <li>215 мм.</li>*/}
                        {/*                        <li>225 мм.</li>*/}
                        {/*                        <li>235 мм.</li>*/}
                        {/*                        <li>245 мм.</li>*/}
                        {/*                        <li>255 мм.</li>*/}
                        {/*                        <li>275 мм.</li>*/}
                        {/*                        <li>285 мм.</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Высота профиля:</div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Высота профиля"*/}
                        {/*                 className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Высота профиля"*/}
                        {/*                        name="s[vysota_profila]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55799861">35%</option>*/}
                        {/*                    <option value="56535461">50%</option>*/}
                        {/*                    <option value="56330261">60%</option>*/}
                        {/*                    <option value="56328861">65%</option>*/}
                        {/*                    <option value="56533061">70%</option>*/}
                        {/*                    <option value="56533461">75%</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">Высота*/}
                        {/*                        профиля*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>35%</li>*/}
                        {/*                        <li>50%</li>*/}
                        {/*                        <li>60%</li>*/}
                        {/*                        <li>65%</li>*/}
                        {/*                        <li>70%</li>*/}
                        {/*                        <li>75%</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Run*/}
                        {/*            Flat:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Run Flat" className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Run Flat" name="s[run_flat]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55800061">Да</option>*/}
                        {/*                    <option value="55800261">Нет</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">*/}
                        {/*                        Run Flat*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>Да</li>*/}
                        {/*                        <li>Нет</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.row hidden__rows">*/}
                        {/*        <div className={styles.row__title clock_row_title">Шипы:*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.row__body">*/}
                        {/*            <div data-placeholder="Шипы" className={styles.jq-selectbox jqselect">*/}
                        {/*                <select data-placeholder="Шипы" name="s[sipy]">*/}
                        {/*                    <option>Все</option>*/}
                        {/*                    <option value="55800461">Да</option>*/}
                        {/*                    <option value="55800661">Нет</option>*/}
                        {/*                </select>*/}
                        {/*                <div className={styles.jq-selectbox__select">*/}
                        {/*                    <div className={styles.jq-selectbox__select-text placeholder">Шипы*/}
                        {/*                    </div>*/}
                        {/*                    <div className={styles.jq-selectbox__trigger">*/}
                        {/*                        <div className={styles.jq-selectbox__trigger-arrow"></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={styles.jq-selectbox__dropdown">*/}
                        {/*                    <ul>*/}
                        {/*                        <li className={styles.selected sel">Все</li>*/}
                        {/*                        <li>Да</li>*/}
                        {/*                        <li>Нет</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div id="shop2_search_global_fields">

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default (SearchBlock);