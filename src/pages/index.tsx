
import type {NextPage} from 'next';
import React from 'react'
import CatCard from '../components/cards/cat/CatCard';
import {mockCatCardProps} from '../components/cards/cat/CatCard.mocks';
import {NextPageWithLayout} from './page';

import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';

const Home: NextPageWithLayout = () => {
  return (
    <CatCard {...mockCatCardProps.base} />
  );
};
export default Home;


Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};


// 在 Next.js 项目中，pages 目录下的每个文件都对应一个路由。pages / index.tsx 文件对应的是根路由（即 /）。
// 在 index.tsx 文件中，你定义了一个名为 Home 的组件，这个组件使用了 NextPageWithLayout 类型，这意味着它可以有一个 getLayout 函数来指定布局。

