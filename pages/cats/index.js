import {getCategories} from "../../utils/categories";

const Categories = ({categories}) => {
     console.log("222",categories)
    return (
        <p>Testing...</p>
    )
}

export default Categories;

export async function getServerSideProps() {
    const { data: categories } = await getCategories();
    return {
        props: {
            categories: categories ?? {}
        }
    };
}