import { Box, Flex, Heading, Card } from 'rebass';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import styled from 'styles/styled';
import Images from 'assets/images';

import { Social } from 'components/nav/nav';

const Team = [
  {
    name: 'Ryan Jacobs',
    avatar: 'https://avatars1.githubusercontent.com/u/41042843?s=460&u=26238ab649548a08ea1ef6efa35cebd4809455b4&v=4',
    role: 'Developer',
    social: {
    }
  },
  {
    name: 'Rohan Krishnaswamy',
    role: 'Lead Developer',
    avatar: 'https://avatars1.githubusercontent.com/u/47869999?s=460&u=fb1cbe84fad8f56e4f1dfbac37a5946dd0ebe1a4&v=4',
    social: {
      github: 'https://www.github.com/rkrishn7',
      linkedin: 'https://www.linkedin.com/in/rkrishn',
      website: 'https://www.rohankrishnaswamy.com',
    }
  },
  {
    name: 'Brandon Paiz',
    avatar: 'https://avatars2.githubusercontent.com/u/11904831?s=460&u=cce5062ff13716b63a6eda773ede8f2067d46140&v=4',
    role: 'Developer',
    social: {
    }
  },
  {
    name: 'Sterling Nicholson',
    avatar: 'https://avatars2.githubusercontent.com/u/52950000?s=460&v=4',
    role: 'Developer',
    social: {
    }
  },
  {
    name: 'Zachary Zulanas',
    role: 'Developer',
    avatar: 'https://avatars2.githubusercontent.com/u/14898614?s=460&u=756f6d00300264cd1473d271e45ec3b65f101b55&v=4',
    social: {
      github: 'https://github.com/zzulanas',
      linkedin: 'https://www.linkedin.com/in/zzulanas',
      website: 'https://zzulanas.com'
    }
  },
];

const MemberCard = styled(Card)`
  width: 275px;
  height: 300px;
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 99999px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Container = styled(Flex)`
  color: white;
  width: 100vw;
  min-height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface SocialLinksProps {
  github?: string;
  linkedin?: string;
  website?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ github, linkedin, website }) => (
  <Flex justifyContent="space-evenly" width="100%">
    {github && (
      <Social href={github} target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
      </Social>
    )}
    {linkedin && (
      <Social href={linkedin} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
      </Social>
    )}
    {website && (
      <Social href={website} target="_blank">
        <FontAwesomeIcon icon={faGlobe} size="2x" color="black" />
      </Social>
    )}
  </Flex>
);

export const People: React.FC = () => {
  return (
    <>
      <Heading fontSize={[ 3, 4, 5 ]} color="primary" fontWeight="600" textAlign="center">
        built by a team of student developers
      </Heading>
      <Container px={5} flexWrap='wrap'>
        {
          Team.map(member => (
            <CardContainer width={[1, 1, 1/3]}>
              <MemberCard m={3}>
                <Heading fontSize={3} color="secondary" fontWeight="400">
                  {member.name}
                </Heading>
                <Heading fontSize={2} color="secondary" fontWeight="600" py={2}>
                  {member.role}
                </Heading>
                <Avatar src={member.avatar} />
                <SocialLinks github={member.social.github} linkedin={member.social.linkedin} website={member.social.website} />
              </MemberCard>
            </CardContainer>
          ))
        }
      </Container>
    </>
  );
}
