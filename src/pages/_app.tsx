import type {AppProps} from 'next/app';
import './globals.css';
import {NextPageWithLayout} from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // 如果这个 layout 是可用的，则在页面中使用 
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

//_app.tsx 文件的作用是自定义 Next.js 的 App 组件，以便你可以添加一些全局的功能，如页面布局。
// App 组件是所有页面的父组件，它包含所有页面共享的代码。