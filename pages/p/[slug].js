import {useRouter} from "next/router";
import Header from "../../components/layouts/header";
import BreadCrumbs from "../../components/breadcrumbs";
import Caption from "../../components/caption";
import Footer from "../../components/layouts/footer";
import Head from "next/head";
import {getProductData} from "../../utils/product";
import GoToPartner from "../../components/goToPartner";
import Link from "next/link";
import Tabs from "../../components/tabs";
import RelatedProductsSlider from "../../components/relatedProductsSlider";
import ProductImages from "../../components/productImages";
import {siteName, siteUrl} from "../../constants/config";

export default function ProductPage({product, upsellProducts}) {
    console.log("product >>", product)
    const pathLocation = useRouter().pathname
    const customFields = product.meta_data
    const vendor = customFields.find(item => item.key === "Производитель")
    const title = customFields.find(item => item.key === "wc_title")
    const description = customFields.find(item => item.key === "wc_description")
    const sku  = product.sku
    const shopName = customFields.find(item => item.key === 'shop_name').value
    const shopLink = customFields.find(item => item.key === 'wc_partner_url').value
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
                <title>{`${sku} ${product.name} купить в Интернет-магазине с доставкой недорого`}</title>
                <meta name="description"
                      content={description ? description.value : `${product.name} купить в Интернет-магазине с доставкой по России всего за ${product.price} руб. Производитель ${vendor.value}. Артикул ${sku} `}/>
                <meta property="og:title" content={`${sku} ${product.name} купить в Интернет-магазине с доставкой недорого`}/>
                {product.images.map(item =>
                    <meta key={item.id} property="og:image" content={item.src}/>
                )}
                <meta property="og:url" content= {siteUrl + useRouter().asPath} />
                <meta property="og:site_name" content= {siteName} />
                <meta property="og:type" content="website" />
            </Head>
            <Header/>
            <div className='site__container product'>
                <div className='site__main__wrap product'>
                    <main role="main" className="site__main product">
                        <div className="site__main__in">
                            <BreadCrumbs
                                isProduct={true}
                                path={pathLocation}
                                namePage={product.name}
                                parentCategoryName={product.categories[0].name}
                                parentCategoryUrl={`${product.categories[0].slug}` + '?id=' + `${product.categories[0].id}`}

                            />
                            <div className="product_top_wrapper" itemScope itemType="http://schema.org/Product">
                                <form method="post" className="shop2-product">
                                    <div className="product_side_l" id="product__images">
                                            <div className="product_labels">
                                                <div className="product_label_item product_sale">
                                                    -{mathDiscount(product.sale_price, product.regular_price)} %
                                                </div>
                                            </div>
                                            <div className="product_image product__gallery__images">
                                                <ProductImages images={product.images} />
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
                                            <div className="product_name" itemProp="name">
                                                <Caption caption={product.name}/>
                                            </div>
                                            <div className="vendor_option">
                                                Артикул {sku}
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
                                            <div className="product-price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                                                <div className="price-old question">
                                                    <span><strong>{product.regular_price}</strong> руб.</span>
                                                </div>
                                                <div className="price-current">
                                                    <strong>{product.price}</strong> руб.
                                                    <meta itemProp="price" content={product.price} />
                                                    <meta itemProp="priceCurrency" content="RUB" />
                                                    <link itemProp="availability" href="http://schema.org/InStock" />
                                                </div>
                                            </div>
                                            <div className="product_buttons">
                                                <div className="product_buttons_in">
                                                    <GoToPartner
                                                        url={shopLink}
                                                        shopName={shopName}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_categories_block">
                                            <span className="caption">Товар находится в категориях:</span>
                                            <div className="links">
                                                {product.categories.map((item) => {
                                                    return (
                                                        <Link key={item.id} href={{
                                                            pathname: `/catalog/${item.slug}`,
                                                            query: {id: item.id}

                                                        }}>
                                                            <a >{item.name}</a>
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
                            </div>

                            <div className="shop_kind_wrap">
                                <h2 className="shop_collection_header">
                                    Рекомендуемые товары
                                </h2>
                                <RelatedProductsSlider relatedProducts={upsellProducts}/>
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
    const crossSellProductsIds = []
    const crossSellIds = []

    product.cross_sell_ids.map((item, index) => {
        if (index < 4) {
            crossSellProductsIds.push(item)
        }
    })

    await Promise.all(crossSellProductsIds.map(async (item) => {
        let {data: crossSellProduct} = await getProductData(item)
        crossSellIds.push(crossSellProduct)
    }))

    return {
        props: {
            product: product ?? {},
            upsellProducts: crossSellIds ?? {}
        }
    }
}