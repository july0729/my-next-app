
import type {NextPage} from 'next';
import React from 'react'
import CatCard from '../components/cards/cat/CatCard';
import {mockCatCardProps} from '../components/cards/cat/CatCard.mocks';
import {Header} from "../stories/Header";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h3>
          Welcome to <a href="<https://nextjs.org>">Next.js!</a>
        </h3>

        <div style={{display: 'flex'}}>
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
        </div>
      </main>

      <footer>
        <a
          href="<https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app>"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;


