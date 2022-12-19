import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar/Navbar';
import styles from './MainLayout.module.css';

export const MainLayout:FC<PropsWithChildren> = ({children}) => {
  return (
<div className={styles.container}>
      <Head>
        <title>Home - Txetxu</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>

        {children}
        
    
      </main>
    </div>
      )
}