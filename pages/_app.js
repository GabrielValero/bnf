import '../styles/globals.css'
import {PostsContextProvider} from '../src/Context/PostsContext'
function MyApp({ Component, pageProps }) {
  return (
    <PostsContextProvider>
      <Component {...pageProps} />
    </PostsContextProvider>
    
  )
}

export default MyApp
