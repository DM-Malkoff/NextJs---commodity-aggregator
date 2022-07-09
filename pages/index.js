import Head from "next/head";
import React, {useEffect, useState} from "react";
import Header from "../components/header";
import SearchBlock from "../components/searchBlock";
import Image from "next/image";
import {getProductsData} from "../utils/products";
import Link from "next/link";
import Footer from "../components/footer";

 function Home({productsTires,productsDiscs}) {
     const [moreCategories, setMoreCategoris] = useState(false)
     const [categoriesBlockHeight, setCategoriesBlockHeight] = useState(260)
     const getMoreCategories = () => {
         setMoreCategoris(!moreCategories)
     }
     useEffect(() => {
         const categoriesBlock = Array.from(document.getElementsByClassName('popular__folders__block'))
         const categoriesBlockHeight = categoriesBlock[0].scrollHeight
         setCategoriesBlockHeight(categoriesBlockHeight)

         //слайдер
         const slickTrack = Array.from(document.getElementsByClassName('slick-track'))
         slickTrack.forEach((elem,index) => {
             slickTrack[index].style.width = productsTires.length*245+'px'
         })

     }, []);
     console.log(productsTires)

  return (
      <>
      <Head>
          <title>Купить шины в Москве — недорого, зимние и летние со склада</title>
          <meta name="description" content="Наш сервис предоставляет возможность купить недорого шины в Москве в популярных Интернет-магазинах. Распродажа зимних и летних автошин со склада в г. Москва на выгодных условиях: скидки от 10%, рассрочка 0%, кредит." />
      </Head>
      <Header />
      <div className='site__container'>
          <SearchBlock />
          <div className="popular__folders__wrapper">
              <div className="popular__folders__wrap">
                  <div className="block__titles__wrap">
                      <div className="block__title">Популярные категории</div>
                  </div>
                  <div className="popular__folders__block" style={{height: `${moreCategories ? categoriesBlockHeight+'px':'260px'}`}}>
                      <ul className="gr-categories popular__folders menu-default">
                          <li className="popular ">
                              <a href="/magazin/folder/shiny">Шины</a>
                              <ul className="level-2">
                                  <li className="  "><a href="/magazin/folder/shiny-legkovyye">Шины легковые</a>
                                  </li>
                                  <li className="  "><a href="/magazin/folder/shiny-legkogruzovyye">Шины легкогрузовые</a>
                                  </li>
                                  <li className="  "><a href="/magazin/folder/shiny-dlya-vnedorozhnikov">Шины для внедорожников</a>
                                  </li>
                                  <li className="  "><a href="/magazin/folder/shiny-dlya-mikroavtobusov">Шины для микроавтобусов</a>
                                  </li>
                                  <li className="  "><a href="/magazin/folder/shiny-dlya-krossoverov">Шины для кроссоверов</a></li>
                              </ul>
                              <a href="/magazin/folder/shiny" className="folders__more__button">Смотреть все</a>
                          </li>
                          <li className="popular ">
                              <a href="/magazin/folder/diski">Диски</a>
                              <ul className="level-2">
                                  <li className="  "><a href="/magazin/folder/lityye-diski">Литые диски</a></li>
                                  <li className="  "><a href="/magazin/folder/shtampovannyye-diski">Штампованные диски</a></li>
                                  <li className="  "><a href="/magazin/folder/stalnyye-diski">Стальные диски</a></li>
                                  <li className="  "><a href="/magazin/folder/kovanyye-diski">Кованые диски</a></li>
                              </ul>
                          </li>
                          <li className="popular "><a href="/magazin/folder/brendy">Бренды</a>
                              <ul className="level-2">
                                  <li className="  "><a href="/magazin/folder/brend-no1">Бренд №1</a></li>
                                  <li className="  "><a href="/magazin/folder/brend-no3">Бренд №3</a></li>
                                  <li className="  "><a href="/magazin/folder/brend-no5">Бренд №5</a></li>
                              </ul>
                              <a href="/magazin/folder/brendy" className="folders__more__button">Смотреть все</a>
                          </li>
                          <li className="popular "><a href="/magazin/folder/avtozapchasti">Автозапчасти</a>
                              <ul className="level-2">
                                  <li className="  "><a href="/magazin/folder/bamper-zadniy">Бампер задний</a></li>
                                  <li className="  "><a href="/magazin/folder/bamper-peredniy">Бампер передний</a></li>
                              </ul>
                          </li>
                          <li className="popular"><a href="/magazin/folder/avtoaksessuary">Автоаксессуары</a>
                              <ul className="level-2">
                                  <li className="  "><a href="/magazin/folder/videoregistratory">Видеорегистраторы</a></li>
                                  <li className="  "><a href="/magazin/folder/avtomobilnaya-optika">Автомобильная оптика</a></li>
                                  <li className="  "><a href="/magazin/folder/antiradary">Антирадары</a></li>
                                  <li className="  "><a href="/magazin/folder/videorekorder">Видеорекордер</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  <div className="more__folders__btn">
                      <span className={moreCategories?'active':''} onClick={getMoreCategories}>еще категории</span>
                  </div>
              </div>
          </div>

          <div className="popular__block__wrapper">
              <div className="popular__block__wrap">
                  <div className="block__title">Популярные шины</div>
                  <div className="block__slider">
                      <div className="prod_list_wrap">
                          <div className="product-list product_list product-list-thumbs slick-initialized slick-slider slick-dotted">
                              <button type="button" className="slick-prev slick-arrow slick-disabled">Previous</button>
                              <div className="slick-list draggable">
                                  <div className="slick-track">
                                      {productsTires.map(product =>
                                          <div key={product.id} className="main__block__item slick-slide" >
                                              <form className="shop2-product-item">
                                                  <div className="product__image">
                                                      <a href="">
                                                          <Image
                                                              src={product.images[0].src}
                                                              alt={product.images[0].name}
                                                              width={200}
                                                              height={200}
                                                          />
                                                      </a>
                                                  </div>
                                                  <div className="product__name">
                                                      <Link href=""><a>{product.name}</a></Link>
                                                  </div>
                                                  <div className="product__price">
                                                      <div className="price-old question">
                                                          <span><strong>{product.regular_price}</strong> руб.</span>
                                                      </div>
                                                      <div className="price-current">
                                                          <strong>{product.sale_price}</strong> руб.
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                      )
                                      }
                                  </div>
                              </div>
                              <button type="button" className="slick-next slick-arrow">Next</button>
                              <ul className="slick-dots">
                                  <li>
                                      <button type="button">1</button>
                                  </li>
                                  <li className="slick-active">
                                      <button type="button">2</button>
                                  </li>
                                  <li>
                                      <button type="button">3</button>
                                  </li>
                                  <li>
                                      <button type="button">4</button>
                                  </li>
                                  <li>
                                      <button type="button">5</button>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="popular__block__wrapper">
              <div className="popular__block__wrap">
                  <div className="block__title">Популярные диски</div>
                  <div className="block__slider">
                      <div className="prod_list_wrap">
                          <div className="product-list product_list product-list-thumbs slick-initialized slick-slider slick-dotted">
                              <button type="button" className="slick-prev slick-arrow slick-disabled">Previous</button>
                              <div className="slick-list draggable">
                                  <div className="slick-track">
                                      {productsDiscs.map(product =>
                                          <div key={product.id} className="main__block__item slick-slide" >
                                              <form className="shop2-product-item">
                                                  <div className="product__image">
                                                      <a href="">
                                                          <Image
                                                              src={product.images[0].src}
                                                              alt={product.images[0].name}
                                                              width={200}
                                                              height={200}
                                                          />
                                                      </a>
                                                  </div>
                                                  <div className="product__name">
                                                      <Link href=""><a>{product.name}</a></Link>
                                                  </div>
                                                  <div className="product__price">
                                                      <div className="price-old question">
                                                          <span><strong>{product.regular_price}</strong> руб.</span>
                                                      </div>
                                                      <div className="price-current">
                                                          <strong>{product.sale_price}</strong> руб.
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                      )
                                      }
                                  </div>
                              </div>
                              <button type="button" className="slick-next slick-arrow">Next</button>
                              <ul className="slick-dots">
                                  <li>
                                      <button type="button">1</button>
                                  </li>
                                  <li className="slick-active">
                                      <button type="button">2</button>
                                  </li>
                                  <li>
                                      <button type="button">3</button>
                                  </li>
                                  <li>
                                      <button type="button">4</button>
                                  </li>
                                  <li>
                                      <button type="button">5</button>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="text__block__wrapper">
              <div className="text__block__wrap">
                  <div className="block__title"><h1>Автомобильные шины</h1></div>
                  <div className="block__body">
                      <p>Погодные условия, в которых мы живем, не самые благоприятные для безопасной езды: это и сорокоградусная жара, и сорокаградусный мороз. Поэтому автомобильные шины нуждаются в регулярной замене.</p>
                      <p>Чтобы не тратит свое время на поиск хорошего и недорого магазина, занимающегося продажей таких товаров, предлагаем вашему вниманию наш интернет-магазин. На нашем сайте представлен широкий ассортимент, надежные производители и товар высокого качества.</p>
                      <p>Наш интернет-магазин предоставляет возможность сделать свой выбор обдуманно и не спеша, тщательно изучив характеристики понравившегося товара. Различная ценовая политика, от самых бюджетных до премиум класса, различные диаметры, ширина профиля, сезонность (зимние, летние, всесезонные), простые и шипованные.</p>
                      <p>У нас самые разумные и обоснованные цены в Москве. Не нужно тратить время и бензин на то, чтобы объездить все точки продажи и выбрать то, что понравится. Покупка новой резины – это всегда затратно. Хорошая и качественная продукция всегда стоит дорого. Но у нас вы можете приобрести недорого любую модель, которая будет соответствовать всем стандартам качества</p>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </>
  )
}
export default Home;

 export async function getServerSideProps() {
     const {data: productsTires} = await getProductsData(4327);
     const {data: productsDiscs} = await getProductsData(4328);
     return {
         props: {
             productsTires: productsTires ?? {},
             productsDiscs: productsDiscs ?? {}
         }
    }
 }

