import {useRouter} from "next/router";
import Header from "../../components/layouts/header";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Footer from "../../components/layouts/footer";
import Head from "next/head";
import Image from "next/image";
import {getProductData} from "../../utils/product";
import GoToPartner from "../../components/goToPartner";
import ProductsSliderProductCard from "../../components/productsSliderProductCard";
import Link from "next/link";
import {useState} from "react";
import Tabs from "../../components/tabs";

export default function ProductPage({product, upsellProducts}) {
    console.log('product > ', product)

    const pathLocation = useRouter().pathname
    const customFields = product.meta_data
    const vendor = product.meta_data.find(item => item.key == "Производитель")
    const title = product.meta_data.find(item => item.key == "wc_title")
    const description = product.meta_data.find(item => item.key == "wc_desctiption")
    const shopName = customFields.find(item => item.key == 'shop_name').value

    const tabsItems =[
        {title: 'Характеристики', content :product.attributes},
        {title: 'Описание', content: product.description}
    ]

    function mathDiscount(salePrice, regularPrice) {
        let percent = (regularPrice - salePrice) * 100 / regularPrice
        return percent.toFixed(0)
    }


    return (
        <>
            <Head>
                <title>{title ? title.value : `${product.name} купить в Интернет-магазине с доставкой недорого`}</title>
                <meta name="description"
                      content={description ? description.value : `${product.name} купить в Интернет-магазине с доставкой по России всего за ${product.price} руб. Производитель ${vendor.value}. Артикул ${product.sku} `}/>
            </Head>
            <Header/>
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
                                parentCategoryUrl={`${product.categories[0].slug}` + '?id=' + `${product.categories[0].id}`}

                            />
                            <div className="product_top_wrapper">
                                <form method="post" className="shop2-product">
                                    <div className="product_side_l">
                                        <div className="product_slider_wr">
                                            <div className="product_labels">
                                                <div className="product_label_item product_sale">
                                                    -{mathDiscount(product.sale_price, product.regular_price)} %
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
                                                    <input type="checkbox"/>
                                                    Добавить к сравнению
                                                </label>
                                            </div>
                                            <div className="product_name">
                                                <Caption caption={product.name}/>
                                            </div>
                                            <div className="vendor_option">
                                                {/*Производитель {vendor.value}*/}
                                            </div>
                                        </div>
                                        <div className="product_bot_block">
                                            <div className="shop2_product_options_wr">
                                                <div className="shop2_product_options">
                                                    {product.attributes.map((item, index) => {
                                                        if (index < 4) {
                                                            return (
                                                                <div key={item.position}
                                                                     className="option_item odd type-select">
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
                                            <div className="product_buttons">
                                                <div className="product_buttons_in">
                                                    <GoToPartner url={product.external_url}
                                                                 shopName={shopName}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_categories_block">
                                            <span className="caption">Товар находится в категориях:</span>
                                            <div className="links">
                                                {product.categories.map((item) => {
                                                    return (
                                                        <Link href={{
                                                            pathname: `/catalog/${item.slug}`,
                                                            query: {id: item.id}

                                                        }}>
                                                            <a key={item.id}>{item.name}</a>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="shop_product_data">
                                <div className="shop_product_tabs_wr">
                                    <Tabs items={tabsItems} />
                                </div>
                                <div className="shop2-clear-container"></div>
                            </div>

                            <div className="shop_kind_wrap">
                                <div className="shop_collection_header">
                                    Рекомендуемые товары
                                </div>
                                <ProductsSliderProductCard relatedProducts={upsellProducts}/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    const {data: product} = await getProductData(context.query.id)

    const upsellProductsIds = []
    const crossSellProductsIds = []

    product.upsell_ids.map((item, index) => {
        if (index < 6) {
            upsellProductsIds.push(item)
        }
    })
    product.cross_sell_ids.map((item, index) => {
        if (index < 6) {
            crossSellProductsIds.push(item)
        }
    })


    const upsellIds = []
    const crossSellIds = []

    // for (const item of upsellProductsIds){
    //     let {data:upsellProduct} = await getProductData(item)
    //     upsellIds.push(upsellProduct)
    // }
    // for (const item of crossSellProductsIds){
    //     let {data:crossSellProduct} = await getProductData(item)
    //     crossSellIds.push(crossSellProduct)
    // }

    await Promise.all(upsellProductsIds.map(async (item) => {
        let {data: upsellProduct} = await getProductData(item)
        upsellIds.push(upsellProduct)
    }))

    // await Promise.all(crossSellProductsIds.map(async (item) => {
    //     let {data:crossSellProduct} = await getProductData(item)
    //     crossSellIds.push(crossSellProduct)
    // }))

    return {
        props: {
            product: product ?? {},
            upsellProducts: upsellIds ?? {},
            crossSellProducts: crossSellIds ?? {},
        }
    }

}