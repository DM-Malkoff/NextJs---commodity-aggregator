import Head from "next/head";
import React, {useEffect, useState} from "react";
import Header from "../components/layouts/header";
import SearchBlock from "../components/searchBlock";
import {getProductsData} from "../utils/products";
import Footer from "../components/layouts/footer";
import PopularProductsSlider from "../components/popularProductsSlider";
import {getCategories} from "../utils/categories";

function Home({productsTires, productsDiscs,categories}) {
    useEffect(() => {
        // const categoriesBlock = Array.from(document.getElementsByClassName('popular__folders__block'))
        // const categoriesBlockHeight = categoriesBlock[0].scrollHeight
        // setCategoriesBlockHeight(categoriesBlockHeight)

        //слайдер
        const slickTrack = Array.from(document.getElementsByClassName('slick-track'))
        slickTrack.forEach((elem, index) => {
            slickTrack[index].style.width = productsTires.length * 245 + 'px'
        })

    }, []);

    return (
        <>
            <Head>
                <title>Купить шины в Москве — недорого, зимние и летние со склада</title>
                <meta name="description"
                      content="Наш сервис предоставляет возможность купить недорого шины в Москве в популярных Интернет-магазинах. Распродажа зимних и летних автошин со склада в г. Москва на выгодных условиях: скидки от 10%, рассрочка 0%, кредит."/>
            </Head>
            <Header/>
            <div className='site__container'>
                <SearchBlock/>

                <PopularProductsSlider data={productsTires} caption={'Популярные шины'}/>
                <PopularProductsSlider data={productsDiscs} caption={'Популярные диски'}/>

                <div className="text__block__wrapper">
                    <div className="text__block__wrap">
                        <div className="block__title"><h1>Автомобильные шины</h1></div>
                        <div className="block__body">
                            <p>Погодные условия, в которых мы живем, не самые благоприятные для безопасной езды: это и
                                сорокоградусная жара, и сорокаградусный мороз. Поэтому автомобильные шины нуждаются в
                                регулярной замене.</p>
                            <p>Чтобы не тратит свое время на поиск хорошего и недорого магазина, занимающегося продажей
                                таких товаров, предлагаем вашему вниманию наш интернет-магазин. На нашем сайте
                                представлен широкий ассортимент, надежные производители и товар высокого качества.</p>
                            <p>Наш интернет-магазин предоставляет возможность сделать свой выбор обдуманно и не спеша,
                                тщательно изучив характеристики понравившегося товара. Различная ценовая политика, от
                                самых бюджетных до премиум класса, различные диаметры, ширина профиля, сезонность
                                (зимние, летние, всесезонные), простые и шипованные.</p>
                            <p>У нас самые разумные и обоснованные цены в Москве. Не нужно тратить время и бензин на то,
                                чтобы объездить все точки продажи и выбрать то, что понравится. Покупка новой резины –
                                это всегда затратно. Хорошая и качественная продукция всегда стоит дорого. Но у нас вы
                                можете приобрести недорого любую модель, которая будет соответствовать всем стандартам
                                качества</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;

export async function getServerSideProps() {
    const {data: productsTires} = await getProductsData(4327);
    const {data: productsDiscs} = await getProductsData(4328);
    const {data: categories} = await getCategories();
    return {
        props: {
            productsTires: productsTires ?? {},
            productsDiscs: productsDiscs ?? {},
            categories: categories ?? {}
        }
    }
}

