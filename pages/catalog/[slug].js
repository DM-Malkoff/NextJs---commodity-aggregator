import {useRouter} from "next/router";
import {getCategories} from "../../utils/categories";
import {getProductsData} from "../../utils/products";
import ProductList from "../../components/productList";
import Head from "next/head";
import Header from "../../components/layouts/header";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Filter from "../../components/filter/filter";
import Footer from "../../components/layouts/footer";
import Sort from "../../components/sort";
import Pagination from "../../components/pagination";
import Towns from "../../utils/towns";
import {quantityProducts, siteName, siteUrl} from "../../constants/config";
import {getAttributes} from "../../utils/attributes";

const Slug = ({products, categories, attributes, currentCategoryId}) => {
    console.log("attributes >> ",attributes)
    const currentCategory = categories.find(item => item.id == currentCategoryId)
    const pathLocation = useRouter().asPath
    const currentPage = useRouter().query.page
    let currentPageNum = currentPage == undefined ? 0 : currentPage

    let townCaption = currentCategory.name
    if (Towns[currentPageNum]) {
        townCaption = `${currentCategory.name} в ${Towns[currentPageNum]}`
    }

    return (
        <>
            <Head>
                <title>Купить {currentCategory.name} в {Towns[currentPageNum]} в Интернет-магазине недорого</title>
                <meta name="description"
                      content={`${currentCategory.name} - большой ассортимент в нашем каталоге. Доставка в ${Towns[currentPageNum]}. Онлайн оформление заказа. Гарантия от магазина и выгодные цены.`}/>
                {Towns[currentPageNum] ? true : <meta name="robots" content="none"/>}
                {useRouter().query.orderby  ?<meta name="robots" content="none"/> : false}

                <meta property="og:title"
                      content={`Купить ${currentCategory.name} в {Towns[currentPageNum]} в Интернет-магазине недорого`}/>
                <meta property="og:image" content="/images/logo.jpg"/>
                <meta property="og:url" content={siteUrl + useRouter().asPath}/>
                <meta property="og:site_name" content={siteName}/>
                <meta property="og:type" content="website"/>
            </Head>
            <Header/>
            <div className='site__container'>
                <div className='site__main__wrap folder'>
                    <main role="main" className="site__main folder">
                        <div className="site__main__in">
                            <BreadCrumbs path={pathLocation} namePage={currentCategory.name}/>
                            <Caption caption={townCaption}/>
                            <div className="mode_folder_wrapper">
                                <Filter/>
                                <div className="mode_folder_body">
                                    <Sort/>
                                    <ProductList products={products}/>
                                    <Pagination
                                        totalQuantityProducts={currentCategory.count}
                                        currentSlug={currentCategory.slug}
                                        currentCategoryId={currentCategoryId}
                                        currentPage={currentPage}
                                        typePage={'catalog'}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Slug;

export async function getServerSideProps(ctx) {
    const {data: categories} = await getCategories();
    const {data: attributes} = await getAttributes();
    const {data: products} = await getProductsData(
        ctx.query.id,
        ctx.query.page,
        quantityProducts,
        ctx.query.orderby,
        ctx.query.order
    );

    return {
        props: {
            categories: categories ?? {},
            attributes: attributes ?? {},
            products: products ?? {},
            currentCategoryId: ctx.query.id
        }
    }
}