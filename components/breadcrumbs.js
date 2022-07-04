import Link from "next/link";

export default function BreadCrumbs({path}){
    return(
        <div className="site-path" data-url="/">
            <Link href="/"><a><span>Главная</span></a></Link> \ <Link href={path}><a><span>Шины</span></a></Link>
        </div>
    )
}
