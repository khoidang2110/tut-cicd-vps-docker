import { NextPage } from 'next';
import Head from 'next/head';

const Hello: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello Page</title>
      </Head>
      <main>
        <h1>Welcome to the Hello Page</h1>
        <p>This is an Hello page created in a Next.js project with TypeScript.</p>
        <p>test truoc khi quay vid</p>
      </main>
    </div>
  );
};

export default Hello;
