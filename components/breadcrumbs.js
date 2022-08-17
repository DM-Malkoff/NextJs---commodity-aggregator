import Link from "next/link";

export default function BreadCrumbs({path, parentCategoryName, parentCategoryUrl, namePage, isProduct}){
    return(
        <div className="site-path" itemScope itemType="https://schema.org/BreadcrumbList">
            <Link href="/">
                <a itemProp="item">
                    <span itemProp="name">Главная</span>
                    <meta itemProp="position" content="1"/>
                </a>

            </Link>
            {parentCategoryName && <Link href={`/catalog/${parentCategoryUrl}`}>
                <a itemProp="item">
                    <span itemProp="name">{parentCategoryName}</span>
                </a>
                <meta itemProp="position" content="2"/>
            </Link> }
            {isProduct && <span>{namePage}</span>}
            {!isProduct && <Link href={path}>
                <a itemProp="item">
                    <span  itemProp="name">{namePage}</span>
                    <meta itemProp="position" content="3"/>
                </a>
            </Link>}
        </div>
    )
}
