import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import {siteName} from "../../constants/config";

const Header = () => {
    const [showMainMenu, setShowMainMenu] = useState(false)
    const [showSearchBLock, setShowSearchBlock] = useState(false)

    function handlerShowMenu() {
        setShowMainMenu(!showMainMenu)
    }

    return (
        <>
            <div onClick={() => {setShowSearchBlock(false)}} className={`search__popup__wrapper${showSearchBLock ? ' active' : ''}`}>
                <div id="search_block" className="search__popup__wrap" onClick={(e)=>{e.stopPropagation()}}>
                    <span className="search__popup__close" onClick={() => {
                        setShowSearchBlock(false)
                    }}>Закрыть</span>
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
                                               width='218'
                                               height='30'
                                               alt={siteName}
                                        />
                                    </a>
                                    </Link>
                                    {/*<span className="folders__popup__btn burger__block__btn"*/}
                                    {/*      onClick={() => handlerShowMenu()}>*/}
                                    {/*    <a>Каталог</a>*/}
                                    {/*</span>*/}
                                </div>

                                <div className='header__top__right'>
                                    <span id="search__popup__btn" className="search__popup__btn"
                                          onClick={() => setShowSearchBlock(true)}>&nbsp;</span>
                                    <span className="cab__popup__btn">&nbsp;</span>
                                </div>
                            </div>

                            <div className='menu-line'>
                                <ul className="menu-default top__menu">
                                    <li className="opened active"><Link href="/"><a><span>Главная</span></a></Link></li>
                                    <li><Link href="/catalog/diski?id=27"><a><span>Диски</span></a></Link></li>
                                    <li><Link href="/catalog/shiny?id=956"><a><span>Шины</span></a></Link></li>
                                    <li><Link href="/catalog/motoshiny?id=4741"><a><span>Мотошины</span></a></Link></li>
                                    <li><Link
                                        href="/catalog/gruzovye-shiny?id=5033"><a><span>Грузовые шины</span></a></Link>
                                    </li>
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
