import { Box, Flex, Heading } from 'rebass';
import Link from 'next/link';

import styled from 'styles/styled';
import Images from 'assets/images';

interface ChatProps {
  
}

const Gif = styled.img`
  width: 80%;
  height: auto;

  @media(min-width: 700px) {
    width: 80%;
  }

  margin-top: ${p => p.theme.space[3]}px;
  
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
`;

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  height: auto;
  overflow: visible;
`;

const Section = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Chat: React.FC<ChatProps> = () => {
  return (
    <Container py={5} flexWrap='wrap'>
      <Section width={[1, 1, 1/2]} px={4}>
        <Heading fontSize={[ 3, 4, 5 ]} color="primary" fontWeight="600" textAlign='center'>
          chat together
        </Heading>
        <Heading fontSize={[ 1, 2, 3 ]} color="primary" mt={1} fontWeight={200} textAlign='center'>
          send and receive messages in your party
        </Heading>
      </Section>
      <Section width={[1, 1, 1/2]} px={4}>
        <Gif src={'https://media.giphy.com/media/dlJOXaRFWxsnCFcyDR/giphy.gif'} />
      </Section>
    </Container>
  );
}
