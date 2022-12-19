import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

//const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h2 className={'title'}>
        Go to <Link href="/about">About</Link>

      </h2>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.tsx</code>
      </p>

    </MainLayout>
  )
}
