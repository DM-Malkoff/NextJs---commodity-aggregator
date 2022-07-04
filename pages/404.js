import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <h1>Страница не найдена</h1>
            Перейти на <Link href='/'><a>главную страницу</a></Link>
        </div>
    )
}

export default NotFoundPage;