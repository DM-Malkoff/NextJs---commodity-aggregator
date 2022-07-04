import Head from "next/head";
import Image from 'next/image';
import Router, {useRouter} from "next/router";
import Link from "next/link";

import {getProductsData} from "../../utils/products";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Filter from "../../components/filter";

const Diski = ({products}) =>{
    console.log('awd',products);
    const pathLocation = useRouter().pathname
    function goToOuterTransition(link, data){
        localStorage.setItem('external-link',link)
        const shopName = data.find(item => item.key == 'Магазин')
        localStorage.setItem('shopName', shopName.value)
        Router.push(`/gotoshop/`);
    }
    function mathDiscount(salePrice, regularPrice){
        let percent = (regularPrice-salePrice)*100/regularPrice
        return percent.toFixed(0)
    }

    return (
        <>
            <Head>
                <title>Купить автомобильные диски в Москве</title>
                <meta name="description" content="Каталог автомобильных дисков" />
            </Head>
            <Header />
            <div className='site__container'>
                <div className='site__main__wrap folder'>
                    <main role="main" className="site__main folder">
                        <div className="site__main__in">
                            <BreadCrumbs path={pathLocation} />
                            <Caption />
                            <div className="mode_folder_wrapper">
                                <Filter />
                                <div className="mode_folder_body">
                                    <div className="shop_sorting_panel clear-self">
                                        <div className="sort_bl_wr sorting">
                                            <div className="sort_bl_in opened">
                                                <div className="sort_bl_title opened">
                                                    <span>Сортировать по</span>
                                                </div>
                                                <div className="sort_bl_wrap" style={{display: 'none'}}>
                                                    <div className="sort_body">
                                                        <div>
                                                            <a href="#" className="sort-param sort-param-desc " data-name="price"><span>По цене</span></a>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="sort-param sort-param-asc " data-name="price"><span>По цене</span></a>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="sort-param sort-param-asc " data-name="name"><span>По алфавиту</span></a>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="sort-param sort-param-desc " data-name="name"><span>По алфавиту</span></a>
                                                        </div>
                                                        <div><a href="#" className="sort-reset active">Не сортировать</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prod_list_wrap">
                                        <div className='product-list product_list product-list-thumbs '>
                                            { !!products.length && products.map(res => {
                                                return (
                                                    <div key={res.id} className='shop2_product_item shop2-product-item'>
                                                        <div className='shop2_item_in'>
                                                            <div className="thumbs__top__wrap">
                                                                <div className="product_top">
                                                                    <div className="product_name">
                                                                        <Link href="#"><a>{res.name}</a></Link>
                                                                    </div>
                                                                    <div className="product-compare">
                                                                        <label>
                                                                            <input type="checkbox" value="377717861" />
                                                                            Добавить к сравнению
                                                                        </label>
                                                                    </div>
                                                                    {/*<span className='short-description'>{res.short_description}</span>*/}
                                                                    <div className="product_image_wr">
                                                                        <div className="product_image">
                                                                            {/*<Link href=/${res.id}/${res.slug}>*/}
                                                                            <Link href="#">
                                                                                <a>
                                                                                    <Image
                                                                                        src={res.images[0].src}
                                                                                        alt="Picture of the author"
                                                                                        width={200}
                                                                                        height={200}
                                                                                    />
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="product-label">
                                                                            <div className="product_label_item product-sale">-{
                                                                                mathDiscount(res.sale_price,res.regular_price)
                                                                            } %</div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product-bot">
                                                                        <div className="product-price">
                                                                            <div className="price-old question">
                                                                                <span><strong>{res.regular_price}</strong>руб.</span>
                                                                            </div>
                                                                            {/*<div className="shop2-product-discount-desc">*/}
                                                                            {/*    <p>10% СКИДКА - Торопитесь, акция ограничена!</p>*/}
                                                                            {/*</div>*/}
                                                                            <div className="price-current">
                                                                                <strong>{res.sale_price}</strong> руб.
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            className="shop_product_button type-2 buy"
                                                                            onClick={() => goToOuterTransition(res.external_url, res.meta_data)}
                                                                        >
                                                                            <span>Купить</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="shop_pagelist_wrap">
                                        <ul className="shop_pagelist">
                                            <li className="page-prev not_active"><a href="/magazin/folder/diski"></a></li>
                                            <li className="page-num active-num"><span>1</span></li>
                                            <li className="page-num"><a href="/magazin/folder/diski/p/1">2</a></li>
                                            <li className="page-next"><a href="/magazin/folder/diski/p/1">&nbsp;</a></li>
                                        </ul>
                                        <ul className="pagelist_mobile menu-default">
                                            <li className="page-prev not_active clone"><a href="/magazin/folder/diski">&nbsp;</a></li>
                                            <li className="page-next clone"><a href="/magazin/folder/diski/p/1">&nbsp;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Diski;

export async function getServerSideProps() {
    const { data: products } = await getProductsData();
    return {
        props: {
            products: products ?? {}
        }
    };
}