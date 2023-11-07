import {NextPage} from 'next';
import {ComponentType, ReactElement, ReactNode} from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};


//page.d.ts是一个类型定义文件，用于定义类型。
//在这里，我们定义了一个类型NextPageWithLayout，它继承了NextPage<P>，并且有一个可选的getLayout方法，这个方法接受一个ReactElement类型的参数，返回一个ReactNode类型的值。 
//getlayout 方法用于返回公共ui组件，这个组件将包裹在每个页面的外层
//layout 用来指定一个渲染的页面，这个页面将会被包裹在getLayout返回的组件中