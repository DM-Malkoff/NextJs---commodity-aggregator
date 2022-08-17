export default function Caption({caption}){
    return(
        <h1 itemProp = {caption || 'Заголовок'}>{caption || 'Заголовок'}</h1>
    )
}
