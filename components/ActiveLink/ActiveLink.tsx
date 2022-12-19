import React, { CSSProperties, FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const style : CSSProperties={
    color:'#0070f2',
    textDecoration:'underline',
}
interface Props{
  text:string;
  href:string;
}
export const ActiveLink: FC<Props>= ({text, href}) => {
    //para saber en que ruta se encuentra=> asPath
    const { asPath }= useRouter();


   // console.log('router',router);
  return (
    <Link href={href} legacyBehavior>
        <a style={(asPath === href) ? style: undefined}>{text}</a>
    </Link>

  );
    
};
