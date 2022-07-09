import {getCategories} from "../../utils/categories";
import SearchBlock from "../../components/searchBlock";
import Header from "../../components/header";
import Caption from "../../components/caption";
import BreadCrumbs from "../../components/breadcrumbs";
import {useRouter} from "next/router";
import CatalogLayout from "../../components/layouts/CatalogLayout";

const Categories = ({categories}) => {
    const Router = useRouter()
    const namePage = 'Каталог товаров'
    console.log(Router)
    if (process.browser) {
        console.log("categories > ", categories)
    }
    return (
        <>
            <CatalogLayout caption='Каталог'>
                фцвфц
            </CatalogLayout>
        </>
    )
}
export async function getServerSideProps() {
    const {data: categories} = await getCategories();
    return {
        props: {
            categories: categories ?? {}
        }
    };
}

export default Categories;

