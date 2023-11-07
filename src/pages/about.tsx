import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import {NextPageWithLayout} from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout Example (About)</h2>
      <p>
        一些废话
      </p>
      <p>
        一些废话
      </p>
      <p>
        一些废话     一些废话     一些废话     一些废话     一些废话
      </p>
      <h3>Try It Out</h3>
      <p>
        To visualize this, try tying in the search input in the{' '}
        <code>Sidebar</code> and then changing routes. You&apos;ll notice the
        input state is persisted.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
