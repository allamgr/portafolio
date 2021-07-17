import { Box, Flex } from 'reflexbox';
import { CompanyDetail, List, LogoContainer, PlainLink, CompanyLogo, SubTitle, Title, Description } from './styles';

export const FALLBACK_LOGO_URL = "https://dummyimage.com/100x100/b5b5b5/333333.png&text=";

const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const MonthName = (month: number) => {
  const name = Months[month-1];
  return name !== undefined ? name : ''
}

export interface CompanyProps {
  name: string,
  location?: string,
  logoUrl?: string,
  url?: string
}

export interface WorkProps {
  company: CompanyProps,
  title: string,
  startMonth: number,
  endMonth?: number,
  startYear: number,
  endYear?: number,
  current?: boolean,
  workType?: string,
  description?: string,
  technologies?: string[]
}

export interface WorkExperienceProps {
  data: Array<WorkProps>
}

export const Work = (props: WorkProps): JSX.Element => {

  let WorkLink = (slProps: any): JSX.Element => {
    if (slProps.href) {
      return <PlainLink href={slProps.href} target="_blank">{slProps.children}</PlainLink>
    }
    return <>{slProps.children}</>
  }

  let expectedFallbackUrl = `${FALLBACK_LOGO_URL}${props.company.name.substr(0, 1)}`;
  let CompanyLogoUrl = props.company.logoUrl ? props.company.logoUrl : expectedFallbackUrl;

  return (
    <li>
      <Flex>
        <LogoContainer>
          <WorkLink href={props.company.url}>
            <CompanyLogo src={CompanyLogoUrl} onError={(e) => { e.currentTarget.onerror = null; if (e.currentTarget.src == expectedFallbackUrl) { return; } e.currentTarget.src = expectedFallbackUrl;}} placeholder={props.company.name} />
          </WorkLink>
        </LogoContainer>
        <CompanyDetail flex={1}>
          <WorkLink href={props.company.url}>
            <Title>{props.title}</Title>
            <SubTitle>{props.company.name}</SubTitle>
            <SubTitle><time>{MonthName(props.startMonth)} {props.startYear}</time> - {props.current ? "Present" : (<time>{MonthName(props.endMonth as number)} {props.endYear}</time>)}</SubTitle>
            {props.company.location && (<SubTitle><small>📍 {props.company.location}</small></SubTitle>)}
          </WorkLink>
          {props.description && (<Description>{props.description}</Description>)}
        </CompanyDetail>
        </Flex>
    </li>
  )
}

export const WorkExperience = (props: WorkExperienceProps): JSX.Element => {
  return (
    <div>
      <h2>💼 Work Experience</h2>
    <List>
      {
        props.data.map((e, i) => {
          return <Work key={i} {...e}/>
        })
      }
      </List>
    </div>
  )
}