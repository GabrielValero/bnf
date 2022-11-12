import '../styles/globals.css'
import {AppContextProvider} from '../src/Context/Ctx'
function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
    
  )
}

export default MyApp
