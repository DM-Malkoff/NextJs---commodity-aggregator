import {quantityProducts} from "../constants/config";
import Link from "next/link";

const Pagination = ({totalQuantityProducts, currentCategory, currentCategoryId, currentPage}) => {
    console.log('currentCategory >>', currentCategory)
    console.log('currentPage >>', currentPage)
    console.log('totalQuantityProducts >>', Math.ceil(totalQuantityProducts / quantityProducts))

    if (currentPage != undefined){
        currentPage = +currentPage
    }

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalQuantityProducts / quantityProducts); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="shop_pagelist_wrap">
            <ul className="shop_pagelist">
                <li className={`page-prev ${currentPage == undefined ? 'not_active' : ''}`}>
                    <Link href={{
                        pathname: `/catalog/${currentCategory}`,
                        query: {
                            id: currentCategoryId,
                            page: currentPage - 1
                        }
                    }}
                    ><a></a></Link></li>

                {currentPage > 1
                    ?
                    <li className="page-num"><Link href=
                                                       {{
                                                           pathname: `/catalog/${currentCategory}`,
                                                           query: {
                                                               id: currentCategoryId
                                                           }
                                                       }}
                    ><a>1</a></Link></li>
                    :
                    <li className="page-num active-num"><span>1</span></li>
                }
                {
                    currentPage > 3 ? <li className="page-num"><span>...</span></li> : false
                }
                {pageNumbers.map((number) => {
                    if (currentPage == undefined && number < 5 && number > 1){
                        return (
                            <li key={number} className="page-num">
                                <Link href=
                                          {{
                                              pathname: `/catalog/${currentCategory}`,
                                              query: {
                                                  id: currentCategoryId,
                                                  page: number
                                              }
                                          }}
                                ><a>{number}</a>
                                </Link>
                            </li>
                        )
                    }
                    if (number > 1 && (number == currentPage || number == currentPage - 1 || number == currentPage + 1)) {
                        if (number == currentPage) {
                            return (
                                <li className="page-num active-num"><span>{number}</span></li>
                            )
                        } else {
                            return (
                                <li key={number} className="page-num">
                                    <Link href=
                                              {{
                                                  pathname: `/catalog/${currentCategory}`,
                                                  query: {
                                                      id: currentCategoryId,
                                                      page: number
                                                  }
                                              }}
                                    ><a>{number}</a>
                                    </Link>
                                </li>
                            )
                        }
                    }
                })}
                {
                    (currentPage < pageNumbers.length - 2 || currentPage == undefined) ? <li className="page-num"><span>...</span></li> : false
                }
                {(currentPage < pageNumbers.length - 1 || currentPage == undefined) ?
                    <li className="page-num"><Link href=
                                                       {{
                                                           pathname: `/catalog/${currentCategory}`,
                                                           query: {
                                                               id: currentCategoryId,
                                                               page: pageNumbers.length
                                                           }
                                                       }}
                    ><a>{pageNumbers.length}</a></Link></li>
                    : false}

                <li className={`page-next ${currentPage == Math.ceil(totalQuantityProducts / quantityProducts) ? 'not_active' : ''}`}>
                    <Link href={{
                        pathname: `/catalog/${currentCategory}`,
                        query: {
                            id: currentCategoryId,
                            page: currentPage + 1
                        }
                    }}>
                        <a>&nbsp;</a>
                    </Link>
                </li>
            </ul>
            <ul className="pagelist_mobile menu-default">
                <li className="page-prev not_active clone"><a href="/magazin/folder/diski">&nbsp;</a></li>
                <li className="page-next clone"><a href="/magazin/folder/diski/p/1">&nbsp;</a></li>
            </ul>
        </div>
    );
};

export default Pagination;