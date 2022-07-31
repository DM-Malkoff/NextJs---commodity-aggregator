import Link from "next/link";

export default function BreadCrumbs({path, parentCategoryName, parentCategoryUrl, namePage, isProduct}){
    return(
        <div className="site-path">
            <Link href="/"><a><span>Главная</span></a></Link>
            {parentCategoryName && <Link href={`/catalog/${parentCategoryUrl}`}><a><span>{parentCategoryName}</span></a></Link> }
            {isProduct && <span>{namePage}</span>}
            {!isProduct && <Link href={path}><a><span>{namePage}</span></a></Link>}
        </div>
    )
}
