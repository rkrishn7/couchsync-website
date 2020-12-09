import { Flex, Text } from "rebass";

import styled from "styles/styled";

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  background-color: #282D46;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <Text fontSize={1} color="white">
        couchsync™ 2020
      </Text>
    </Container>
  );
};
