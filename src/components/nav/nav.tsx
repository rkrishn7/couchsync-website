import { Box, Flex, Heading } from 'rebass';
import Link from 'next/link';

import styled from 'styles/styled';
import Images from 'assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface NavProps {

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
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: white;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.1);
`;

export const Social = styled.a`
  opacity: 0.7;
  color: black;
  transition: all 0.2s linear;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  :active {
    transform: scale(0.8);
  }
`;

export const Nav: React.FC<NavProps> = () => {
  return (
    <Container>
      <Flex alignItems="center">
        <Logo src={Images.logo} />
        <Brand ml={2}>
          <Link href="/">
            couchsync
          </Link>
        </Brand>
      </Flex>
      <Social href="https://github.com/rkrishn7/couchsync" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
      </Social>
    </Container>
  );
}
