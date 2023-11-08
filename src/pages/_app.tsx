import type {AppProps} from 'next/app';
import './globals.css';
import {NextPageWithLayout} from './page';
import React, {useEffect, useState} from 'react';


//_app.tsx 文件的作用是自定义 Next.js 的 App 组件，以便你可以添加一些全局的功能，如页面布局。
// App 组件是所有页面的父组件，它包含所有页面共享的代码。
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

// 错误边界捕获
class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染可以显示降级后的 UI
    return {hasError: true}
  }

  componentDidCatch() {
    // log error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    //@ts-ignore
    return this.props.children
  }
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(true)
  // 如果这个 layout 是可用的，则在页面中使用 
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return <ErrorBoundary>
    {getLayout(<Component {...pageProps} />)}
  </ErrorBoundary>
}

export default MyApp;

