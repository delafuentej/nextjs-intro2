import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const style={
    color:'#0070f2',
    textDecoration:'underline'
}

export const ActiveLink = ({text, href}) => {
    //para saber en que ruta se encuentra=> asPath
    const { asPath }= useRouter();


   // console.log('router',router);
  return (
    <Link href={href} legacyBehavior>
        <a style={(asPath === href) ? style: null}>{text}</a>
    </Link>

  );
    
};
