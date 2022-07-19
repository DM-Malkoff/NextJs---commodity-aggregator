import Link from "next/link";
import {ReactComponent as favourite} from "../../public/images/favorite_icon.svg";

const Header = () => {
    return(
        // <div className="burger__block__wrapper">
        //     <div className="burger__block__wrap">
        //         <div className="burger__block__wrap__in">
        //             <div className="burger__block__close">Закрыть</div>
        //             <div className="burger__block__title"><span>Каталог</span></div>
        //             <div className="burger__block__inner">
        //                 <div className="folders__block__wrap waSlideMenu-nav">
        //                     <div className="waSlideMenu-wrapper">
        //                         <ul className="menu-default top__folders waSlideMenu-menu">
        //                             <li className="sublevel selected">
        //                                 <a className="has_sublayer" href="/magazin/folder/shiny">Шины</a></li>
        //                             <li className="sublevel"><a className="has_sublayer" href="/magazin/folder/diski">Диски</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <ul className="menu-default top__menu">
        //                 <li className="opened active"><a href="/"><span>Главная</span></a></li>
        //                 <li><a href="/o-kompanii"><span>О сервисе</span></a></li>
        //                 <li><a href="/aktsii"><span>Акции</span></a></li>
        //                 <li><a href="/poleznoye"><span>Полезное</span></a></li>
        //                 <li><a href="/servis-i-uslugi"><span>Сервис и услуги</span></a>
        //                     <ul className="level-2">
        //                         <li><a href="/ob-oplate-tovara"><span>Об оплате товара</span></a></li>
        //                         <li><a href="/dostavka"><span>Доставка</span></a></li>
        //                         <li><a href="/shinomontazh"><span>Шиномонтаж</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a href="/kontakty"><span>Контакты</span></a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>


        <header className='site__header'>
            <div className='site__header__top__wrap'>
                <div className='site__header__top'>
                    <div className='site__header__top__in'>
                        <div className='site__header__top'>
                            <div className='header__top__left'>
                                <span className="folders__popup__btn burger__block__btn">
                                    <Link href="/catalog"><a>Каталог</a></Link>
                                </span>
                            </div>
                            <div className='header__top__center'>
                                <ul className="menu-default top__menu">
                                    <li className="opened active"><Link  href="/"><a><span>Главная</span></a></Link></li>
                                    <li><Link  href="/about"><a><span>О компании</span></a></Link>
                                        <ul className="level-2">
                                            <li><a href="/otzyvy" ><span>Отзывы</span></a></li>
                                            <li><a href="/novosti" ><span>Новости</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/servis-i-uslugi" ><span>Сервис и услуги</span></a></li>
                                    <li><a href="/kontakty" ><span>Контакты</span></a></li></ul>
                            </div>
                            <div className='header__top__right'>
                                <span className="search__popup__btn">&nbsp;</span>
                                <span className="cab__popup__btn">&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
