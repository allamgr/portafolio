import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';

const ProjectContainer = styled(Flex)`
  margin-bottom: 20px;
  @media (max-width: 425px) {
    flex-direction: row;
  }
`;

const ProjectTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 0;
`
const ProjectDescription = styled.p`
  font-size: 0.8rem;
  color: #00000099;
  line-height: 1.2rem;
  white-space: pre-wrap;
`

const ProjectStacks = styled(Flex)`

`

const ProjectStackItem = styled.div`
  
`

const ProjectDuration = styled.div`
  font-size: 0.8rem;
  color: #00000099;
  line-height: 1.2rem;
`

const ProjectPreview = styled.img`
  
  
`
const ProjectPreviewContainer = styled.div`
  
`
const ProjectDetails = styled(Box)`
  margin-bottom: 15px;
`

const ProjectStackContainer = styled(Flex)`

`

const ProjectStack = styled(Flex)`
  border-radius: 3px;  
  margin-right: 10px!important;
  margin-bottom: 10px!important;
  font-size: 0.8rem;
  font-weight: 700;
`

export {
  ProjectContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectStacks,
  ProjectStackItem,
  ProjectDuration,
  ProjectPreview,
  ProjectPreviewContainer,
  ProjectDetails,
  ProjectStackContainer,
  ProjectStack
};