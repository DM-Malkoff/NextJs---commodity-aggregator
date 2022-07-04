export default function Filter(){
    return(
        <div className="mode_folder_filter">
            <div className="filter_block_wrapper">
                <div className="filter_block_wrap">
                    <div className="filter_block_close">Закрыть</div>
                    <div className="filter_block_title">Фильтр</div>
                    {/*marginRight: spacing */}
                    <form action="#" className="shop2-filter">
                        <div className="table-filter-param">
                            <div className="shop_filter_field">
                                <div className="filter_field_title active">Цена: (руб.)</div>
                                <div className="filter_field_body range">
                                    <div className="input_from">
                                        <input placeholder="от" className="shop2-input-float"
                                               type="text" value="" name="s[price][min]" />
                                    </div>
                                    <div className="input_to">
                                        <input placeholder="до" className="shop2-input-float"
                                               type="text" value="" name="s[price][max]" />
                                    </div>
                                </div>
                            </div>

                            <div className="shop_filter_field">
                                <div className="filter_field_title active">Производитель:</div>
                                <div className="filter_field_body">
                                    <a href="#" data-name="s[vendor_id][]" data-value="34198661"
                                       className="param_val">
                                        Производитель №12<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[vendor_id][]" data-value="33889861"
                                       className="param_val">
                                        Производитель №2<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[vendor_id][]" data-value="34144461"
                                       className="param_val">
                                        Производитель №3<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[vendor_id][]" data-value="34144661"
                                       className="param_val">
                                        Производитель №5<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[vendor_id][]" data-value="34198461"
                                       className="param_val">
                                        Производитель №7<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[vendor_id][]" data-value="34198261"
                                       className="param_val">
                                        Производитель №8<span>&nbsp;</span>
                                    </a>
                                </div>
                            </div>

                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title active">Сезон:</div>
                                <div className="filter_field_body">
                                    <a href="#" data-name="s[sezon][]" data-value="55797061"
                                       className="param_val">Любой<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[sezon][]" data-value="55797261"
                                       className="param_val">Всесезонные<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[sezon][]" data-value="55797461"
                                       className="param_val">Лето<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[sezon][]" data-value="55797661"
                                       className="param_val">Зима<span>&nbsp;</span></a>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Тип автомобиля:</div>
                                <div className="filter_field_body"><a
                                    href="#" data-name="s[tip_avtomobila][]"
                                    data-value="55800861"
                                    className="param_val">Легковой<span>&nbsp;</span></a><a
                                    href="#" data-name="s[tip_avtomobila][]"
                                    data-value="56532661"
                                    className="param_val">Легкогрузовой<span>&nbsp;</span></a><a
                                    href="#" data-name="s[tip_avtomobila][]"
                                    data-value="56533861"
                                    className="param_val">Внедорожник<span>&nbsp;</span></a><a
                                    href="#" data-name="s[tip_avtomobila][]"
                                    data-value="56535061"
                                    className="param_val">Кроссовер<span>&nbsp;</span></a>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Диаметр:</div>
                                <div className="filter_field_body">
                                    <a href="#" data-name="s[diametr][]" data-value="55798261"
                                       className="param_val">14"<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[diametr][]" data-value="56329861"
                                       className="param_val">16"<span>&nbsp;</span>
                                    </a>
                                    <a href="#" data-name="s[diametr][]" data-value="56535661"
                                       className="param_val">17"<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[diametr][]" data-value="56534261"
                                       className="param_val">18"<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[diametr][]" data-value="55801261"
                                       className="param_val">19"<span>&nbsp;</span></a>
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
                                <div className="filter_field_body"><a
                                    href="#" data-name="s[vysota_profila][]"
                                    data-value="55799861"
                                    className="param_val">35%<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[vysota_profila][]" data-value="56535461"
                                       className="param_val">50%<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[vysota_profila][]" data-value="56330261"
                                       className="param_val">60%<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[vysota_profila][]" data-value="56328861"
                                       className="param_val">65%<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[vysota_profila][]" data-value="56533061"
                                       className="param_val">70%<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[vysota_profila][]" data-value="56533461"
                                       className="param_val">75%<span>&nbsp;</span></a>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Run Flat:</div>
                                <div className="filter_field_body">
                                    <a href="#" data-name="s[run_flat][]" data-value="55800061"
                                       className="param_val">Да<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[run_flat][]" data-value="55800261"
                                       className="param_val">Нет<span>&nbsp;</span></a>
                                </div>
                            </div>
                            <div className="shop_filter_field shop2-filter-fields type-select">
                                <div className="filter_field_title">Шипы:</div>
                                <div className="filter_field_body">
                                    <a href="#" data-name="s[sipy][]" data-value="55800461"
                                       className="param_val">Да<span>&nbsp;</span></a>
                                    <a href="#" data-name="s[sipy][]" data-value="55800661"
                                       className="param_val">Нет<span>&nbsp;</span></a>
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