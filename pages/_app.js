import '../styles/globals.scss'
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
      <div className='site__wrapper'>
            <Component {...pageProps} />
      </div>
  )
}

export default MyApp
