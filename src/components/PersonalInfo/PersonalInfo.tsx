import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGenderless, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, Header, Brief, StyledPosition, Info } from './styles';
import { Flex, Box } from 'reflexbox'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export interface PositionProps {
  children?: any,
  name?: string,
  at?: string
  atLink?: string,
  startDate?: Date | string | number,
}

export interface PersonalInfoProps {
  name?: string;
  position?: string | PositionProps | PositionProps[];
  brief?: string;
  email?: string;
  emailDomain?: string;
  location?: string;
  phone?: string;
  gender?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export const Position = (props: PositionProps): JSX.Element => {

  function since(): JSX.Element | null{
    return props.startDate ? (<small> [{props.startDate} - present]</small>) : null
  }
  
  function renderAt() {

    let At = (atProps: any): JSX.Element => {
      return (<span> at {atProps.children}</span>)
    }

    if (props.atLink && props.at) {
      return <At><a href={props.atLink} target="_blank">{props.at}</a></At>
    } else if (props.at){
      return <At>{props.at}</At>;
    }
    return null;
  }

  function renderPosition(): JSX.Element{
    if (props.children) {
      return <>{props.children}{renderAt()}{since()}</>;
    } else if (props.name) {
      return <>{props.name}{renderAt()}{since()}</>;
    } else {
      return <span>Position requires a children or name prop</span>
    }
  }

  return (
    <StyledPosition>
      {renderPosition()}
    </StyledPosition>
  )
}

export const PersonalInfo = (props: PersonalInfoProps): JSX.Element => {
  return (
    <Wrapper>
      <div>  
        <Header>{props.name}</Header>
        {
          (() => {
            if (typeof props.position == 'string') {
              return <Position>{props.position}</Position>
            }
            else if (Array.isArray(props.position)) {
              return props.position.map((p, i) => {
                    return <Position key={i} {...p}/>
                  })
            }
            else if (props.position instanceof Object) {
              return <Position {...(props.position as PositionProps)} />
            }
          })()
        }
        {props.brief && <Brief>{props.brief}</Brief>}
      </div>
      <Flex flexWrap={['wrap', 'wrap', 'wrap']}>
          { props.email && props.emailDomain &&  (<Info><FontAwesomeIcon icon={faEnvelope}/> <a href={`mailto:${props.email}@${props.emailDomain}`}>{props.email}<span>@</span>{props.emailDomain}</a></Info>)}
          { props.location && <Info><FontAwesomeIcon icon={faMapMarkedAlt}/> {props.location}</Info> }
          { props.phone && <Info><FontAwesomeIcon icon={faPhone} /> <a href={`tel:${props.phone}`}>{props.phone}</a></Info>}
          { props.gender && <Info><FontAwesomeIcon icon={faGenderless}/> {props.gender}</Info>}
          { props.github && <Info><FontAwesomeIcon icon={faGithub} /> <a href={`https://github.com/${props.github}`} target="_blank">{props.github}</a></Info>}
          { props.linkedin && <Info><a href={`https://www.linkedin.com/in/${props.linkedin}`} target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></Info>}
          { props.twitter && <Info><a href={`https://www.twitter.com/${props.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></Info>}
      </Flex>
    </Wrapper>
  )
}

export default PersonalInfo;