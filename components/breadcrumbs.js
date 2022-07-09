import Link from "next/link";

export default function BreadCrumbs({path, namePage}){
    return(
        <div className="site-path" data-url="/">
            <Link href="/"><a><span>Главная</span></a></Link> \ <Link href={path}><a><span>{namePage}</span></a></Link>
        </div>
    )
}
