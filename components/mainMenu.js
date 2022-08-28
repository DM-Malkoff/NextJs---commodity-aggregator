import Link from "next/link";
import {menuCategories} from "../constants/config";
import {useEffect, useRef, useState} from "react";


const MainMenu = ({showMenu, handler}) => {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const clickSubMenu = (e) => {
        e.preventDefault()
        setShowSubMenu(true)
    }
    const subMenuClickHandler = () => {
        handler()
        setShowSubMenu(false)
    }

    const [menuBlockHeight, setMenuBlockHeight] = useState(0)
    const ref = useRef(null)

    useEffect(()=>{
        setMenuBlockHeight(ref.current.scrollHeight)
    })

    return (
        <div className={`burger__block__wrapper ${showMenu ? 'active' : ''}`} onClick={handler}>
            <div className="burger__block__wrap" onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="burger__block__wrap__in">
                    <div className="burger__block__close" onClick={handler}>&nbsp;</div>
                    <div className="burger__block__title"><span>Каталог</span></div>
                    <div className="burger__block__inner">
                        <div className="folders__block__wrap waSlideMenu-nav" ref={ref}>
                            <div className="waSlideMenu-wrapper">
                                <ul className="menu-default top__folders waSlideMenu-menu">
                                    {menuCategories.map((item) => {
                                        const subLevel = menuCategories.filter((subItem) => subItem.parent == item.id)
                                        if (item.parent === 0) {
                                            return (
                                                <li key={item.id} className="subLevel">
                                                    <Link href={{
                                                        pathname: `/catalog/${item.slug}`,
                                                        query: {
                                                            id: item.id
                                                        }
                                                    }}>
                                                        <a className="has_sublayer" onClick={subLevel.length ? clickSubMenu:handler}>
                                                            {item.name}
                                                            {subLevel.length ?
                                                                <span>&nbsp;</span>
                                                                :
                                                                false
                                                            }
                                                        </a>
                                                    </Link>
                                                    {subLevel.length ?
                                                        <ul className="waSlideMenu-menu waSlideMenu-i_menu">
                                                            <li className="waSlideMenu-back">
                                                                <span onClick={()=> {setShowSubMenu(false)}}>Назад</span>
                                                            </li>
                                                            <li className="parent-item">
                                                                <Link href={{
                                                                    pathname: `/catalog/${item.slug}`,
                                                                    query: {
                                                                        id: item.id
                                                                    }
                                                                }}>
                                                                    <a onClick={() => subMenuClickHandler()}>{item.name}</a>
                                                                </Link>
                                                            </li>
                                                            {subLevel.map((item) => {
                                                                return (
                                                                    <li key={item.id}>
                                                                        <Link href={{
                                                                            pathname: `/catalog/${item.slug}`,
                                                                            query: {
                                                                                id: item.id
                                                                            }
                                                                        }}>
                                                                            <a onClick={() => subMenuClickHandler()}>{item.name}</a>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                        :
                                                        false
                                                    }
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .waSlideMenu-wrapper{
                    transform: ${showSubMenu ?'translateX(-100%);':'translateX(0);'};
                    transition: 0.3s;
                }
                .folders__block__wrap{
                    height: ${menuBlockHeight ? menuBlockHeight + 'px':false} 
                }
            `}
            </style>
        </div>
    );
};

export default MainMenu;