import { Box, Flex } from 'reflexbox';
import { EducationDetail, List, LogoContainer, PlainLink, SchoolLogo, SubTitle, Title } from './styles';

export const FALLBACK_LOGO_URL = "https://dummyimage.com/100x100/b5b5b5/333333.png&text=";

export interface SchoolProps {
  name: string,
  acronym?: string,
  location?: string,
  logoUrl?: string,
  url?: string
}

export interface EducationProps {
  school: SchoolProps,
  degree: string,
  startYear: number,
  endYear?: number
}

export interface EducationInfoProps {
  data: Array<EducationProps>
}

export const Education = (props: EducationProps): JSX.Element => {

  let SchoolLink = (slProps: any): JSX.Element => {
    if (slProps.href) {
      return <PlainLink href={slProps.href} target="_blank">{slProps.children}</PlainLink>
    }
    return <>{slProps.children}</>
  }

  let expectedFallbackUrl = `${FALLBACK_LOGO_URL}${props.school.acronym ? props.school.acronym : props.school.name.substr(0, 1)}`;
  let SchoolLogoUrl = props.school.logoUrl ? props.school.logoUrl : expectedFallbackUrl;

  return (
    <li>
      <Flex>
        <LogoContainer>
          <SchoolLink href={props.school.url}>
            {

            }
            <SchoolLogo src={SchoolLogoUrl} onError={(e) => { e.currentTarget.onerror = null; if (e.currentTarget.src == expectedFallbackUrl) { return; } e.currentTarget.src = expectedFallbackUrl;}} placeholder={props.school.name} />
          </SchoolLink>
        </LogoContainer>
        <EducationDetail flex={1}>
          <SchoolLink href={props.school.url}>
            <Title>{props.school.name}{props.school.acronym && (<small> ({props.school.acronym})</small>)}</Title>
            {props.school.location && (<SubTitle><small>📍 {props.school.location}</small></SubTitle>)}
            <SubTitle>{props.degree}</SubTitle>
            <SubTitle><time>{props.startYear}</time>{props.endYear ? " - " : null}{props.endYear && (<time>{props.endYear}</time>)}</SubTitle>
          </SchoolLink>
        </EducationDetail>
        </Flex>
    </li>
  )
}

export const EducationInfo = (props: EducationInfoProps): JSX.Element => {
  return (
    <div>
      <h2>🎓 Education</h2>
      <List>
      {
        props.data && props.data.map((e, i) => {
          return <Education key={i} {...e}/>
        })
      }
      </List>
    </div>
  )
}