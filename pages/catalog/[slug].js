import {useRouter} from "next/router";
import {getCategories} from "../../utils/categories";
import {getProductsData} from "../../utils/products";
import ProductList from "../../components/productList";
import Head from "next/head";
import Header from "../../components/layouts/header";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Filter from "../../components/filter";
import Footer from "../../components/layouts/footer";
import Sort from "../../components/sort";
import Pagination from "../../components/pagination";

const Slug = ({products,categories,currentCategoryId}) => {
    const currentCategory = categories.find(item => item.id == currentCategoryId)
    console.log('products from cat >', products)
    console.log('category info >', categories)
    const pathLocation = useRouter().asPath
    const currentPage = useRouter().query.page
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
                            <BreadCrumbs isCatalog={true} path={pathLocation} namePage={currentCategory.name}/>
                            <Caption caption={currentCategory.name} />
                            <div className="mode_folder_wrapper">
                                <Filter />
                                <div className="mode_folder_body">
                                    <Sort />
                                    <ProductList products={products} />
                                    <Pagination
                                        totalQuantityProducts={currentCategory.count}
                                        currentCategory={currentCategory.slug}
                                        currentCategoryId={currentCategoryId}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Slug;

export async function getServerSideProps(context) {
    const {data: categories} = await getCategories();
    const {data: products} = await getProductsData(context.query.id);
    return {
        props: {
            categories: categories ?? {},
            products: products ?? {},
            currentCategoryId: context.query.id
        }
    }
}