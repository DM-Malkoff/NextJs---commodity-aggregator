import Head from "next/head";
import Header from "../components/layouts/header";
import SearchBlock from "../components/searchBlock";
import {getProductsData} from "../utils/products";
import Footer from "../components/layouts/footer";
import {getCategories} from "../utils/categories";
import {quantityProductsMainSlider} from "../constants/config";
import 'swiper/css';
import MainSlider from "../components/mainSlider";

function Home({productsTires, productsDiscs}) {

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

                {/*<PopularProductsSlider data={productsTires} caption={'Популярные шины'}/>*/}
                {/*<PopularProductsSlider data={productsDiscs} caption={'Популярные диски'}/>*/}
                <MainSlider data={productsTires} caption={'Популярные шины'} />
                <MainSlider data={productsDiscs} caption={'Популярные диски'} />

                <div className="text__block__wrapper">
                    <div className="text__block__wrap">
                        <div className="block__title"><h1>Автомобильные шины, диски и аксессуары</h1></div>
                        <div className="block__body">
                            <p>Moscow-shiny.ru - не просто Интернет-магазин. У нас Вы сможете с легкостью найти шины или
                                диски по нужным Вам характеристикам и ценам в популярных Интернет-магазинах и всё это не выходя из дома.</p>
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
    const {data: productsTires} = await getProductsData(16, 1, quantityProductsMainSlider);
    const {data: productsDiscs} = await getProductsData(17, 1, quantityProductsMainSlider);
    const {data: categories} = await getCategories();
    return {
        props: {
            productsTires: productsTires ?? {},
            productsDiscs: productsDiscs ?? {},
            categories: categories ?? {}
        }
    }
}

