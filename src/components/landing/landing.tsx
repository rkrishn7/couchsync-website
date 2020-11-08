import { Box, Flex, Heading } from 'rebass';
import Link from 'next/link';

import styled from 'styles/styled';
import Images from 'assets/images';

interface LandingProps {

}

const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-left: ${p => p.theme.space[2]}px;
`;

const Brand = styled(Heading)`
  color: ${p => p.theme.colors.primary};
  font-weight: 600;
`;

const Container = styled(Flex)`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  color: white;
  background-color: ${p => p.theme.colors.primary};
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Screenshot = styled.img`
  transform: scale(0.28);
  margin-left: 100px;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <Container>
      <Flex flexDirection="column">
        <Heading fontSize={[ 3, 4, 5 ]} color="white" fontWeight="600">
          the better way to stream with friends
        </Heading>
        <Heading fontSize={[ 1, 2, 3 ]} color="white" mt={1} fontWeight={200}>
          couchsync makes it easier than ever to sync videos in real time.
        </Heading>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flex={2}>
        <Screenshot src={Images.appScreenshot} />
      </Flex>
    </Container>
  );
}
