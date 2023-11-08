import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import {useRouter} from 'next/router';
import React from 'react'

function Home() {
  const router = useRouter();

  const redirectTO = () => {
    router.push('/home/1111');

  }
  return (
    <div onClick={redirectTO}>haha</div>
  )
}
export default Home;


Home.getLayout = (page: any) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
}
