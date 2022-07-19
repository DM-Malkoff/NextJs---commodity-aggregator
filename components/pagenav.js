const Pagenav = () => {
    return (
        <div className="shop_pagelist_wrap">
            <ul className="shop_pagelist">
                <li className="page-prev not_active"><a href="/magazin/folder/diski"></a></li>
                <li className="page-num active-num"><span>1</span></li>
                <li className="page-num"><a href="/magazin/folder/diski/p/1">2</a></li>
                <li className="page-next"><a href="/magazin/folder/diski/p/1">&nbsp;</a></li>
            </ul>
            <ul className="pagelist_mobile menu-default">
                <li className="page-prev not_active clone"><a href="/magazin/folder/diski">&nbsp;</a></li>
                <li className="page-next clone"><a href="/magazin/folder/diski/p/1">&nbsp;</a></li>
            </ul>
        </div>
    );
};

export default Pagenav;