import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

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
                        <div className="burger__block__close" onClick={() => handlerShowMenu()}>Закрыть</div>
                        <div className="burger__block__title"><span>Каталог</span></div>
                        <div className="burger__block__inner">
                            <div className=" folders__block__wrap waSlideMenu-nav">
                                <div className=" waSlideMenu-wrapper">
                                    <ul className=" menu-default top__folders waSlideMenu-menu">
                                        <li className="sublevel selected">
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
                                    <Link href='/'><a>
                                        <Image src='/images/logo.jpg'
                                               width='160'
                                               height='30'
                                               alt='moscow-shiny.ru'
                                        />
                                    </a>
                                    </Link>
                                {/*<span className="folders__popup__btn burger__block__btn"*/}
                                {/*      onClick={() => handlerShowMenu()}>*/}
                                {/*    <a>Каталог</a>*/}
                                {/*</span>*/}
                                </div>

                                <div className='header__top__right'>
                                    <span className="search__popup__btn"
                                          onClick={() => handlerShowSearchBlock()}>&nbsp;</span>
                                    <span className="cab__popup__btn">&nbsp;</span>
                                </div>
                            </div>

                            <div className='menu-line'>
                                <ul className="menu-default top__menu">
                                    <li className="opened active"><Link href="/"><a><span>Главная</span></a></Link></li>
                                    <li><Link href="/catalog/shiny?id=16"><a><span>Шины</span></a></Link></li>
                                    <li><Link href="/catalog/diski?id=17"><a><span>Диски</span></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
