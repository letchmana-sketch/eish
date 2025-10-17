import '../styles/globals.css'
import { FirebaseProvider } from '../src/lib/firebase'
export default function App({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  )
}
