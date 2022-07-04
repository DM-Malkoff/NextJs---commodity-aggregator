import Link from "next/link";

const Header = () => {
    return(
        <header className='site__header'>
            <div className='site__header__top__wrap'>
                <div className='site__header__top'>
                    <div className='site__header__top__in'>
                        <div className='site__header__top'>
                            <div className='header__top__left'>
                                <span className="folders__popup__btn burger__block__btn">Каталог</span>
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

