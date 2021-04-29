import styled from 'styled-components';
import {Box} from 'reflexbox/styled-components'

const Wrapper = styled.div`
`

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const StyledPosition = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
`;


const Brief = styled.p`
  margin: 0;
  margin-bottom: 1rem;
`;

const Info = styled(Box)`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

export {
  StyledPosition,
  Wrapper,
  Header,
  Brief,
  Info
};