import Link from "next/link";
import {useState} from "react";

const Header = () => {
    const [showMainMenu, setShowMainMenu] = useState(false)
    const [showSearchBLock, setShowSearchBlock] = useState(false)


    function handlerShowMenu() {
        setShowMainMenu(!showMainMenu)
    }

    function handlerShowSearchBlock() {
        setShowSearchBlock(!showSearchBLock)
    }

    return (
        <>
            <div className={`burger__block__wrapper${showMainMenu ? ' active' : ''}`}>
                <div className="burger__block__wrap">
                    <div className=" burger__block__wrap__in">
                        <div className=" burger__block__close" onClick={() => handlerShowMenu()}>Закрыть</div>
                        <div className=" burger__block__title"><span>Каталог</span></div>
                        <div className=" burger__block__inner">
                            <div className=" folders__block__wrap waSlideMenu-nav">
                                <div className=" waSlideMenu-wrapper">
                                    <ul className=" menu-default top__folders waSlideMenu-menu">
                                        <li className=" sublevel selected">
                                            <Link href="/catalog/shiny?id=4327">
                                                <a onClick={() => {
                                                    setShowMainMenu(false)
                                                }}>Шины</a>
                                            </Link>
                                        </li>
                                        <li className="sublevel">
                                            <Link href="/catalog/diski?id=4328">
                                                <a onClick={() => {
                                                    setShowMainMenu(false)
                                                }}>Диски</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="menu-default top__menu">
                            <li className="opened active"><a href="/"><span>Главная</span></a></li>
                            <li><a href="/o-kompanii"><span>О сервисе</span></a></li>
                            <li><a href="/aktsii"><span>Акции</span></a></li>
                            <li><a href="/poleznoye"><span>Полезное</span></a></li>
                            <li><a href="/servis-i-uslugi"><span>Сервис и услуги</span></a>
                                <ul className="level-2">
                                    <li><a href="/ob-oplate-tovara"><span>Об оплате товара</span></a></li>
                                    <li><a href="/dostavka"><span>Доставка</span></a></li>
                                    <li><a href="/shinomontazh"><span>Шиномонтаж</span></a></li>
                                </ul>
                            </li>
                            <li><a href="/kontakty"><span>Контакты</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`search__popup__wrapper${showSearchBLock ? ' active anim' : ''}`}>
                <div className="search__popup__wrap">
                    <span className="search__popup__close" onClick={()=> {setShowSearchBlock(false)}}>Закрыть</span>
                    <nav className="site__search__wr">
                        <div className="search__title">Поиск</div>
                        <form action={`/search/search/`} method="get" className="search__form">
                            <input
                                name="id"
                                type="text"
                                className="search__text"
                                placeholder="Введите запрос"
                                id="roll"
                                required
                                minLength="3"
                                maxLength="50"
                            />
                            <button className="search__button" type="submit" value="">Найти</button>
                        </form>
                    </nav>
                </div>
            </div>
            <header className='site__header'>
                <div className='site__header__top__wrap'>
                    <div className='site__header__top'>
                        <div className='site__header__top__in'>
                            <div className='site__header__top'>
                                <div className='header__top__left'>
                                <span className="folders__popup__btn burger__block__btn"
                                      onClick={() => handlerShowMenu()}>
                                    <a>Каталог</a>
                                </span>
                                </div>
                                <div className='header__top__center'>
                                    <ul className="menu-default top__menu">
                                        <li className="opened active"><Link href="/"><a><span>Главная</span></a></Link>
                                        </li>
                                        <li><Link href="/about"><a><span>О компании</span></a></Link>
                                            <ul className="level-2">
                                                <li><a href="/otzyvy"><span>Отзывы</span></a></li>
                                                <li><a href="/novosti"><span>Новости</span></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/servis-i-uslugi"><span>Сервис и услуги</span></a></li>
                                        <li><a href="/kontakty"><span>Контакты</span></a></li>
                                    </ul>
                                </div>
                                <div className='header__top__right'>
                                    <span className="search__popup__btn"
                                          onClick={() => handlerShowSearchBlock()}>&nbsp;</span>
                                    <span className="cab__popup__btn">&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
