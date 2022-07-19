import Head from "next/head";
import React, {useEffect, useState} from "react";
import Header from "../components/layouts/header";
import SearchBlock from "../components/searchBlock";
import {getProductsData} from "../utils/products";
import Link from "next/link";
import Footer from "../components/layouts/footer";
import PopularProductsSlider from "../components/popularProductsSlider";
import {getCategories} from "../utils/categories";

function Home({productsTires, productsDiscs,categories}) {
    useEffect(() => {
        const categoriesBlock = Array.from(document.getElementsByClassName('popular__folders__block'))
        const categoriesBlockHeight = categoriesBlock[0].scrollHeight
        setCategoriesBlockHeight(categoriesBlockHeight)

        //слайдер
        const slickTrack = Array.from(document.getElementsByClassName('slick-track'))
        slickTrack.forEach((elem, index) => {
            slickTrack[index].style.width = productsTires.length * 245 + 'px'
        })

    }, []);

    const [moreCategories, setMoreCategories] = useState(false)
    const [categoriesBlockHeight, setCategoriesBlockHeight] = useState(260)
    const getMoreCategories = () => {
        setMoreCategories(!moreCategories)
    }
    console.log('categories > ', categories)

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
                <div className="popular__folders__wrapper">
                    <div className="popular__folders__wrap">
                        <div className="block__titles__wrap">
                            <div className="block__title">Популярные категории</div>
                        </div>
                        <div className="popular__folders__block"
                             style={{height: `${moreCategories ? categoriesBlockHeight + 'px' : '260px'}`}}>
                            <ul className="gr-categories popular__folders menu-default">


                                <li className="popular "><Link href="/"><a>Шины</a></Link>
                                    <ul className="level-2">
                                        {categories.map((item,index) => {
                                            if (index > 0){
                                                return(
                                                    <li>
                                                        <Link href={{
                                                            pathname: `/catalog/${item.slug}`,
                                                            query: {
                                                                id: item.id
                                                            }
                                                        }}>
                                                            <a>{item.name}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        })}
                                        <li><Link href="/"><a>Шины легковые</a></Link></li>
                                        <li><Link href="/"><a>Шины легкогрузовые</a></Link></li>
                                        <li><Link href="/"><a>Шины для внедорожников</a></Link></li>
                                        <li><Link href="/"><a>Шины для микроавтобусов</a></Link></li>
                                        <li><Link href="/"><a>Шины для кроссоверов</a></Link></li>
                                    </ul>
                                    <Link href="/"><a className="folders__more__button">Смотреть все</a></Link>
                                </li>
                                <li className="popular ">
                                    <Link href="/"><a>Диски</a></Link>
                                    <ul className="level-2">
                                        <li><Link href="/"><a>Литые диски</a></Link></li>
                                        <li><Link href="/"><a>Штампованные диски</a></Link></li>
                                        <li><Link href="/"><a>Стальные диски</a></Link></li>
                                        <li><Link href="/"><a>Кованые диски</a></Link></li>
                                    </ul>
                                </li>
                                <li className="popular "><Link href="/"><a>Бренды</a></Link>
                                    <ul className="level-2">
                                        <li><Link href="/"><a>Бренд №1</a></Link></li>
                                        <li><Link href="/"><a>Бренд №3</a></Link></li>
                                        <li><Link href="/"><a>Бренд №5</a></Link></li>
                                    </ul>
                                    <Link href="/"><a className="folders__more__button">Смотреть все</a></Link>
                                </li>
                                <li className="popular "><Link href="/"><a>Автозапчасти</a></Link>
                                    <ul className="level-2">
                                        <li><Link href="/"><a>Бампер задний</a></Link></li>
                                        <li><Link href="/"><a>Бампер передний</a></Link></li>
                                    </ul>
                                </li>
                                <li className="popular"><Link href="/"><a>Автоаксессуары</a></Link>
                                    <ul className="level-2">
                                        <li><Link href="/"><a>Видеорегистраторы</a></Link></li>
                                        <li><Link href="/"><a>Автомобильная оптика</a></Link></li>
                                        <li><Link href="/"><a>Антирадары</a></Link></li>
                                        <li><Link href="/"><a>Видеорекордер</a></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="more__folders__btn">
                            <span className={moreCategories ? 'active' : ''}
                                  onClick={getMoreCategories}>еще категории</span>
                        </div>
                    </div>
                </div>

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

