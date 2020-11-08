import { Box, Flex, Heading } from 'rebass';
import Link from 'next/link';

import styled from 'styles/styled';
import Images from 'assets/images';

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
    </Container>
  );
}
