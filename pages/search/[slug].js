import {useRouter} from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import {getSearchProducts} from "../../utils/searchProducts";
import ProductList from "../../components/productList";
import Pagination from "../../components/pagination";

const SearchProducts = ({searchResults}) => {
    console.log("SearchResults Length >> ", searchResults.length)
    const searchQuery = useRouter().query.id

    return (
        <div>
            <MainLayout caption={'Поиск товаров'}>
                <div className="">По запросу <span>{searchQuery}</span> найдено {searchResults.length} товаров.</div>
                {searchResults.length ?
                    <ProductList products={searchResults} />:
                    <div className="g-notice g-notice--indents">
                        Ничего не найдено. Вы можете вернуться на  <a href="/">главную</a> страницу сайта или изменить свой запрос и повторить поиск.
                    </div>
                }
            </MainLayout>
        </div>
    );
};

export default SearchProducts;

export async function getServerSideProps(ctx){
    console.log(ctx)
    const {data: searchResults} = await getSearchProducts(encodeURI(ctx.query.id,ctx.query.page))
    return{
        props: {
            searchResults: searchResults
        }
    }
}