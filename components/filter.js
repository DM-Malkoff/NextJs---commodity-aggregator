export default function Filter(){
    if (process.browser) {
        const filterItem = document.getElementsByClassName('shop_filter_field')
        const filterGroupName = document.getElementsByClassName('filter_field_title')
        const filterBlock = document.getElementsByClassName('filter_field_body')
        for (let itemIndex=0; itemIndex < filterItem.length; itemIndex++){
            filterGroupName[itemIndex].addEventListener('click', function (){
                filterItem[itemIndex].classList.toggle('active')
                filterBlock[itemIndex].style.height = filterItem[itemIndex].classList.contains('active') ? filterBlock[itemIndex].scrollHeight + 'px' : 0
            })
        }
        const filterOption = document.getElementsByClassName('param_val')
        for (let optionIndex = 0;optionIndex < filterOption.length; optionIndex++){
            filterOption[optionIndex].addEventListener('click',function (){
                filterOption[optionIndex].classList.toggle('active-val')
            })
        }
    }

    return(
        <div className="mode_folder_filter">
            <div className="filter_block_wrapper">
                <div className="filter_block_wrap">
                    <div className="filter_block_title">Фильтр</div>
                    <form action="#" className="shop2-filter">
                        <div className="table-filter-param">
                            <div className="shop_filter_field">
                                <div className="filter_field_title">Цена: (руб.)</div>
                                <div className="filter_field_body range">
                                    <div className="input_from">
                                        <input placeholder="от" className="shop2-input-float" type="text" name="s[price][min]" />
                                    </div>
                                    <div className="input_to">
                                        <input placeholder="до" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="shop_filter_field">
                                <div className="filter_field_title">Производитель:</div>
                                <div className="filter_field_body">
                                    <span data-name="s[vendor_id][]" data-value="34198661" className="param_val">
                                        Производитель №12
                                    </span>
                                    <span data-name="s[vendor_id][]" data-value="33889861" className="param_val">
                                        Производитель №2
                                    </span>
                                    <span data-name="s[vendor_id][]" data-value="34144461" className="param_val">
                                        Производитель №3
                                    </span>
                                    <span data-name="s[vendor_id][]" data-value="34144661" className="param_val">
                                        Производитель №5
                                    </span>
                                    <span data-name="s[vendor_id][]" data-value="34198461" className="param_val">
                                        Производитель №7
                                    </span>
                                    <span data-name="s[vendor_id][]" data-value="34198261" className="param_val">
                                        Производитель №8
                                    </span>
                                </div>
                            </div>

                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Сезон:</div>
                                <div className="filter_field_body">
                                    <span data-name="s[sezon][]" data-value="55797061" className="param_val">Любой</span>
                                    <span data-name="s[sezon][]" data-value="55797261" className="param_val">Всесезонные</span>
                                    <span data-name="s[sezon][]" data-value="55797461" className="param_val">Лето</span>
                                    <span data-name="s[sezon][]" data-value="55797661" className="param_val">Зима</span>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Тип автомобиля:</div>
                                <div className="filter_field_body">
                                    <span data-name="s[tip_avtomobila][]" data-value="55800861" className="param_val">Легковой</span>
                                    <span data-name="s[tip_avtomobila][]" data-value="56532661" className="param_val">Легкогрузовой</span>
                                    <span data-name="s[tip_avtomobila][]" data-value="56533861" className="param_val">Внедорожник</span>
                                    <span data-name="s[tip_avtomobila][]" data-value="56535061" className="param_val">Кроссовер</span>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Диаметр:</div>
                                <div className="filter_field_body">
                                    <span data-name="s[diametr][]" data-value="55798261" className="param_val">14&quot;</span>
                                    <span data-name="s[diametr][]" data-value="56329861" className="param_val">16&quot;</span>
                                    <span data-name="s[diametr][]" data-value="56535661" className="param_val">17&quot;</span>
                                    <span data-name="s[diametr][]" data-value="56534261" className="param_val">18&quot;</span>
                                    <span data-name="s[diametr][]" data-value="55801261" className="param_val">19&quot;</span>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Ширина профиля:</div>
                                <div className="filter_field_body select">
                                    <div data-placeholder="Ширина профиля"
                                         className="jq-selectbox jqselect">
                                        <select name="s[sirina_profila]" data-placeholder="Ширина профиля">
                                            <option value="">Ширина профиля</option>
                                            <option value="56532861">165 мм.</option>
                                            <option value="56328661">175 мм.</option>
                                            <option value="56534861">185 мм.</option>
                                            <option value="56533261">195 мм.</option>
                                            <option value="56533661">215 мм.</option>
                                            <option value="56330061">225 мм.</option>
                                            <option value="56535261">235 мм.</option>
                                            <option value="56534661">245 мм.</option>
                                            <option value="56534061">255 мм.</option>
                                            <option value="55799661">275 мм.</option>
                                            <option value="56534461">285 мм.</option>
                                        </select>
                                        <div className="jq-selectbox__select">
                                            <div
                                                className="jq-selectbox__select-text placeholder">Ширина
                                                профиля
                                            </div>
                                            <div className="jq-selectbox__trigger">
                                                <div className="jq-selectbox__trigger-arrow"></div>
                                            </div>
                                        </div>
                                        <div className="jq-selectbox__dropdown">
                                            <ul>
                                                <li className="selected sel">Ширина профиля</li>
                                                <li>165 мм.</li>
                                                <li>175 мм.</li>
                                                <li>185 мм.</li>
                                                <li>195 мм.</li>
                                                <li>215 мм.</li>
                                                <li>225 мм.</li>
                                                <li>235 мм.</li>
                                                <li>245 мм.</li>
                                                <li>255 мм.</li>
                                                <li>275 мм.</li>
                                                <li>285 мм.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Высота профиля:</div>
                                <div className="filter_field_body">
                                    <span data-name="s[vysota_profila][]" className="param_val">35%</span>
                                    <span data-name="s[vysota_profila][]" className="param_val">50%</span>
                                    <span data-name="s[vysota_profila][]" className="param_val">60%</span>
                                    <span data-name="s[vysota_profila][]" className="param_val">65%</span>
                                    <span data-name="s[vysota_profila][]" className="param_val">70%</span>
                                    <span data-name="s[vysota_profila][]" className="param_val">75%</span>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Run Flat:</div>
                                <div className="filter_field_body">
                                    <span href="#" data-name="s[run_flat][]" className="param_val">Да</span>
                                    <span href="#" data-name="s[run_flat][]" className="param_val">Нет</span>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Шипы:</div>
                                <div className="filter_field_body">
                                    <span href="#" data-name="s[sipy][]" className="param_val">Да</span>
                                    <span href="#" data-name="s[sipy][]" className="param_val">Нет</span>
                                </div>
                            </div>

                        </div>

                        <div className="filter_buttons_wrap">
                            <span className="result">Подобрано <ins id="filter-result">0 товаров</ins></span>
                            <div className="filter_buttons">
                                <a href="#" className="shop_btn shop2-filter-go">Показать</a>
                                <a href="/magazin/folder/shiny"
                                   className="shop_btn reset">Очистить</a>
                            </div>
                        </div>
                    </form>
                    {/*Filter*/}
                </div>
            </div>
        </div>
    )
}