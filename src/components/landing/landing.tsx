import { Box, Flex, Heading } from "rebass";
import Link from "next/link";
import Lottie from "lottie-react-web";

import styled from "styles/styled";
import Images from "assets/images";
import animation from "assets/homepage_animation.json";

interface LandingProps {}

const Screenshot = styled.img`
  width: 250px;
  height: auto;

  @media (min-width: 700px) {
    width: 650px;
  }

  border-radius: ${(p) => p.theme.radii[2]}px;
  box-shadow: 10px 10px 19px -6px rgba(0, 0, 0, 0.75);
`;

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Section = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <Container px={5} flexWrap="wrap">
      <Section width={[1, 1, 1 / 3]} px={2}>
        <Heading fontSize={[3, 4, 5]} color="primary" fontWeight="600">
          the better way to stream with friends
        </Heading>
        <Heading fontSize={[1, 2, 3]} color="primary" mt={1} fontWeight={200}>
          couchsync makes it easier than ever to sync videos in real time
        </Heading>
      </Section>
      <Section width={[1, 1, 2 / 3]} px={0.2}>
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </Section>
    </Container>
  );
};
