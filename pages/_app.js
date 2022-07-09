import '../styles/globals.scss'
import CatalogLayout from "../components/layouts/CatalogLayout";

function MyApp({ Component, pageProps }) {
  return (
      <div className='site__wrapper'>
            <Component {...pageProps} />
      </div>
  )
}

export default MyApp
