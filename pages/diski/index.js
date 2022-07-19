import {getCategoryData} from "../../utils/category";


const Diski = ({categoryInfo}) =>{
    console.log('categoryInfo > ',categoryInfo);


    return (
        <>
            awd
        </>
    )
}

export default Diski;

export async function getServerSideProps() {
    const { data: categoryInfo } = await getCategoryData();
    return {
        props: {
            categoryInfo: categoryInfo ?? {}
        }
    };
}