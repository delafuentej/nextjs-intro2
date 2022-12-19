import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';


export default function Contact() {
  return (
    <MainLayout>
    <h1>Contact Page</h1>

    <h2 className={'title'}>
      Go to <Link href="/pricing">Pricing</Link>

    </h2>
    <p className={'description'}>
      Get started by editing&nbsp;
      <code className={'code'}>pages/contact/index.tsx</code>
    </p>

  </MainLayout>
  )
}
