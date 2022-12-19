import { ReactNode, ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement)=> ReactNode;
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }:AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  //cualquier compenente que deseemos que esté disponible en toda la aplicación
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}
