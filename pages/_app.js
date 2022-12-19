import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  //cualquier compenente que deseemos que esté disponible en toda la aplicación
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}
