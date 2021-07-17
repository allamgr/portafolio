import styled from 'styled-components';
import {Box} from 'reflexbox/styled-components'

export const List = styled.ul`
  padding: 0;
  list-style: none inside;
  display: block;
`;

export const CompanyLogo = styled.img`
  width:100%;
  height:100%;
  max-height:100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LogoContainer = styled.div`
  height: 56px;
  width: 56px;
  position: relative;
  float: left;
  border: 1px solid #ddd;
  border-radius: 3px;
  overflow: hidden;
`

export const CompanyDetail = styled(Box)`
  min-height: 60px;
  margin-left: 10px;
  margin-bottom: 15px;
`
export const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 2px;
  font-weight: 600;
`

export const SubTitle = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.4rem;
  color: #00000099;
  `

export const PlainLink = styled.a`
  color: inherit;
  &:hover, &:active, &:focus{
    text-decoration: underline;
  }
`

export const Description = styled.p`
  line-height: 1.2rem;
  color: #000000;
  font-size: 0.8rem;
  `