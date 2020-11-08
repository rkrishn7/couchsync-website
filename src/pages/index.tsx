import Head from 'next/head';
import { Box } from 'rebass';
import styled from 'styles/styled';
import styles from '../styles/Home.module.css';

import { Nav } from 'components/nav';
import { Landing } from 'components/landing';

const Root = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>couchsync</title>
        <link rel="icon" href="/couchsync/favicon.ico" />
      </Head>

      <Root>
        <Nav />
        <Landing />
      </Root>
    </div>
  );
}
