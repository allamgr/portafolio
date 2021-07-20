import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';

const TechLevelContainer = styled(Flex)`
  margin-bottom: 10px
`;

const TechLevel = styled(Flex)`
  margin-right: 20px;
  margin-bottom: 10px;
  flex-wrap: 'nowrap'
`;

const TechLevelBadge = styled.span`
  display: inline-block;
  background: #ddd;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  border: 2px solid #ddd;
`;

const TechLevelDesc = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: #00000099;
`;

const TechLabel = styled.span`
  font-size: 0.9rem;
  color: #00000099;
`

const TechItemContainer = styled(Box)`
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 4px;
  margin-right: 15px;
  margin-bottom: 10px;
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechItem = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 50px;
`

export {
  TechLevelContainer,
  TechLevel,
  TechLevelBadge,
  TechLevelDesc,
  TechLabel,
  TechItemContainer,
  TechItem,
};