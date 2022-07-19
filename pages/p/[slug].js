import {useRouter} from "next/router";
import Header from "../../components/layouts/header";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Footer from "../../components/layouts/footer";
import Head from "next/head";
import Image from "next/image";
import {getProductData} from "../../utils/product";
import GoToPartner from "../../components/goToPartner";
import ProductCard from "../../components/productCard";
import ProductsSliderProductCard from "../../components/productsSliderProductCard";

export default function ProductPage({product, upsellProducts,crossSellProducts}) {
    console.log('product > ',product)
    console.log('upsellProducts > ',upsellProducts)
    console.log('crossSellProducts > ',crossSellProducts)

    const pathLocation = useRouter().pathname
    const customFields = product.meta_data
    const vendor = product.meta_data.find(item => item.key == "Производитель")
    const title = product.meta_data.find(item => item.key == "wc_title")
    const description = product.meta_data.find(item => item.key == "wc_desctiption")

    function mathDiscount(salePrice, regularPrice){
        let percent = (regularPrice-salePrice)*100/regularPrice
        return percent.toFixed(0)
    }

    const shopName = customFields.find(item => item.key == 'Магазин')

    return (
        <>
            <Head>
                <title>{title.value}</title>
                <meta name="description" content={description.value} />
            </Head>
            <Header />
            <div className='site__container product'>
                <div className='site__main__wrap product'>
                    <main role="main" className="site__main product">
                        <div className="site__main__in">
                            <BreadCrumbs
                                isCatalog={true}
                                isProduct={true}
                                path={pathLocation}
                                namePage={product.name}
                                parentCategoryName={product.categories[0].name}
                                parentCategoryUrl={`${product.categories[0].slug}`+'?id='+`${product.categories[0].id}`}

                            />
                            <div className="product_top_wrapper">
                                <form method="post" className="shop2-product">
                                    <div className="product_side_l">
                                        <div className="product_slider_wr">
                                            <div className="product_labels">
                                                <div className="product_label_item product_sale">
                                                    -{mathDiscount(product.sale_price,product.regular_price)} %
                                                </div>
                                            </div>
                                            <div className="product_slider">
                                                <div className="product_image">
                                                    <Image
                                                        src={product.images[0].src}
                                                        alt={product.name}
                                                        title=''
                                                        width='460'
                                                        height='460'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_side_r">
                                        <div className="product_top_block">
                                            <div className="product-compare">
                                                <label>
                                                    <input type="checkbox" />
                                                    Добавить к сравнению
                                                </label>
                                            </div>
                                            <div className="product_name">
                                                <Caption caption={product.name} />
                                            </div>
                                            <div className="vendor_option">
                                                Производитель {vendor.value}
                                            </div>
                                        </div>
                                        <div className="product_bot_block">
                                            <div className="shop2_product_options_wr">
                                                <div className="shop2_product_options">
                                                    {product.attributes.map((item, index) => {
                                                        if (index < 4){
                                                            return (
                                                                <div key={item.position} className="option_item odd type-select">
                                                                    <div className="option_title">{item.name}:</div>
                                                                    <div className="option_body">{item.options[0]}</div>
                                                                </div>
                                                            )
                                                        }
                                                        })}
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <div className="price-old question">
                                                    <span><strong>{product.regular_price}</strong> руб.</span>
                                                </div>
                                                <div className="price-current">
                                                    <strong>{product.price}</strong> руб.
                                                </div>
                                            </div>
                                            <div className="shopName_info">
                                                Товар продаётся в магазине <span>{shopName.value}</span>
                                            </div>
                                            <div className="product_buttons">
                                                <div className="product_buttons_in">
                                                    <GoToPartner url={product.external_url} shopName={product.meta_data} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="shop_product_data">
                                <div className="shop_product_tabs_wr">
                                    <ul className="shop_product_tabs">
                                        <li className="active-tab">
                                            <span className="r-tabs-anchor">Характеристики</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="shop_product_desc">
                                    <div className="desc-area">
                                        <div className="shop_product_params">
                                            {product.attributes.map((item) => {
                                                return(
                                                    <div key={item.position} className="param_item">
                                                        <div className="param_title">{item.name}</div>
                                                        <div className="param_body">{item.options[0]}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="shop2-clear-container"></div>
                                    </div>
                                </div>
                                <div className="shop2-clear-container"></div>
                            </div>

                            <div className="shop_kind_wrap">
                                <div className="shop_collection_header">
                                    Рекомендуемые товары
                                </div>
                                <ProductsSliderProductCard relatedProducts={upsellProducts}/>
                            </div>
                            <div className="shop_kind_wrap">
                                <div className="shop_collection_header">
                                    C этим товаром смотрят
                                </div>
                                <ProductsSliderProductCard relatedProducts={crossSellProducts}/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context){

    const {data:product} = await getProductData(context.query.id)
    const upsellIds = []
    const crossSellIds = []

    for (const item of product.upsell_ids){
        let {data:upsellProduct} = await getProductData(item)
        upsellIds.push(upsellProduct)
    }
    for (const item of product.cross_sell_ids){
        let {data:crossSellProduct} = await getProductData(item)
        crossSellIds.push(crossSellProduct)
    }

    // const {data:upsellProduct0} = await getProductData(product.upsell_ids[0])
    // const {data:upsellProduct1} = await getProductData(product.upsell_ids[1])
    // const {data:upsellProduct2} = await getProductData(product.upsell_ids[2])
    // const {data:upsellProduct3} = await getProductData(product.upsell_ids[3])
    // const {data:upsellProduct4} = await getProductData(product.upsell_ids[4])
    return{
        props: {
            product: product ?? {},
            upsellProducts: upsellIds ?? {},
            crossSellProducts: crossSellIds ?? {},
        }
    }

}