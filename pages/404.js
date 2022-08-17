import Link from 'next/link'
import MainLayout from "../components/layouts/MainLayout";
import MainSlider from "../components/mainSlider";
import {getProductsData} from "../utils/products";
import {quantityProductsMainSlider} from "../constants/config";
import {getCategories} from "../utils/categories";

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <MainLayout caption={"Упс... Страница не найдена"} lastNode={"404"}>
                <span class="error-404">404</span>
                <p>Страница которую Вы ищете больше недоступна. Воспользуйтесь поиском или перейдите на <Link href='/'><a>главную страницу</a></Link> страницу.</p>
            </MainLayout>
        </div>
    )
}

export default NotFoundPage;