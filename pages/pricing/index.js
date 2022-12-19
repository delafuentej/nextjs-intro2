import React from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

function Pricing() {
  return (
    <MainLayout>
    <h1>Pricing Page</h1>

    <h2 className={'title'}>
      Go to <Link href="/">Home</Link>

    </h2>
    <p className={'description'}>
      Get started by editing&nbsp;
      <code className={'code'}>pages/pricing/index.jsx</code>
    </p>

  </MainLayout>
  )
}

export default Pricing


