import { Flex, Heading } from "rebass";
import Lottie from "lottie-react-web";

import styled from "styles/styled";
import animation from "assets/homepage-animation.json";

interface LandingProps {}

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: #282D46;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <Container>
      <Lottie
        style={{ paddingBottom: '10px' }}
        options={{
          animationData: animation,
        }}
      />
      <Heading fontSize={[ 3, 5, 7 ]} color="white" fontWeight="600" textAlign="center" pb="150px">
        the better way to stream with friends
      </Heading>
    </Container>
  );
};
