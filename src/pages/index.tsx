import Head from 'next/head';
import { Box } from 'rebass';
import styled from 'styles/styled';
import styles from '../styles/Home.module.css';

import Images from 'assets/images';

import { Nav } from 'components/nav';
import { Landing } from 'components/landing';
import { Faq } from 'components/faq';
import { People } from 'components/people';

const Root = styled(Box)`
  background-color: white;
  width: 100vw;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>couchsync</title>
        <link rel="icon" href={Images.favicon} />
      </Head>

      <Root>
        <Nav />
        <Landing />
        <Faq />
        <People />
      </Root>
    </div>
  );
}
