import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';
import { DarkLayout } from '../../components/layouts/DarkLayout';


export default function About() {

  return (
  <>
      
        <h1>About Page</h1>

        <h2 className={'title'}>
          Go to <Link href="/contact">Contact</Link>

        </h2>
        <p className={'description'}>
          Get started by editing&nbsp;
          <code className={'code'}>pages/about/index.jsx</code>
        </p>




      
   

  </>
  )
}
//multiple nested layouts
About.getLayout = function getLayout( page ){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}