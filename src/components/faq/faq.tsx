import { Card, Flex, Heading, Text } from "rebass";
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faChrome, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from "styles/styled";

interface LandingProps {}

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  min-height: 80vh;
  background-color: #282D46;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const InfoCard = styled(Card)`
  width: 275px;
  height: 300px;
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const CardContainer = styled(Flex)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const IconLink = styled.a`
  transition: all 0.2s linear;
  color: ${p => p.theme.colors.primary};

  :hover {
    color: ${p => p.theme.colors.secondary};
    cursor: pointer;
  }

  :active {
    transform: scale(0.8);
  }
`;

export const Faq: React.FC<LandingProps> = () => {
  return (
    <Container>
      <Heading fontSize={[6, 7]} color="white" fontWeight="600" py={5}>
        how it works
      </Heading>
      <CardContainer flexWrap='wrap'>
        <InfoCard m={3}>
          <Heading fontSize={5} color="#282D46" fontWeight="700" pb={2}>
            install
          </Heading>
          <IconLink href="https://chrome.google.com/webstore/detail/couchsync/pohhidgcfdhdbkajkafkiigbaidooece" target="_blank">
            <FontAwesomeIcon icon={faChrome} size="6x" />
          </IconLink>
          <Text fontSize={2} color="#282D46" fontWeight="600">
            download the extension from the chrome web store
          </Text>
        </InfoCard>
        <InfoCard m={3}>
          <Heading fontSize={5} color="#282D46" fontWeight="700" pb={2}>
            watch
          </Heading>
          <FontAwesomeIcon icon={faYoutube} size="6x" color="#F58B51" />
          <Text fontSize={2} color="#282D46" fontWeight="600">
            open any youtube video and create a party
          </Text>
        </InfoCard>
        <InfoCard m={3}>
          <Heading fontSize={5} color="#282D46" fontWeight="700" pb={2}>
            connect
          </Heading>
          <FontAwesomeIcon icon={faUsers} size="6x" color="#F58B51" />
          <Text fontSize={2} color="#282D46" fontWeight="600">
            invite friends, connect, and have fun
          </Text>
        </InfoCard>
      </CardContainer>
    </Container>
  );
};
