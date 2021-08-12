import React from 'react';
import { Flex, Box } from 'reflexbox'
import { EducationInfoProps } from '../../components/EducationInfo/EducationInfo';
import { WorkExperience, WorkExperienceProps } from '../../components/WorkExperience/WorkExperience';
import { EducationInfo } from '../../components/EducationInfo';
import { PersonalInfo,  } from '../../components/PersonalInfo';
import { PersonalInfoProps } from '../../components/PersonalInfo/PersonalInfo';
import { SkillsAndTech } from '../../components/SkillsAndTech';
import { SkillsAndTechProps } from '../../components/SkillsAndTech/SkillsAndTech';
import { Portfolio } from '../../components/Portfolio';
import { PortfolioProps } from '../../components/Portfolio/Porfolio';
import { Aside, Main } from './styles';

export interface AllInfoProps {
  personalInfo?: PersonalInfoProps,
  skillsAndTech?: SkillsAndTechProps,
  educationInfo?: EducationInfoProps,
  workExperience?: WorkExperienceProps,
  portfolio?: PortfolioProps
}

export interface TemplateProps {
  data?: AllInfoProps,
  json?: string;
}

export const Template = (props: any): JSX.Element => {
  return <div style={{padding: '10px'}}>{props.children}</div>
}

export const TemplateLean = (props: TemplateProps): JSX.Element => {

  let data: AllInfoProps = {
  };
  
  if (props.json) {
    console.log(props.json);
    let _json = JSON.parse(props.json) as AllInfoProps;
    data = _json;
  } else if(props.data) {
    data = props.data;
  } else {
    return <div>error: data or json param required</div>
  }

  return (
    <Template>
      <div style={{marginBottom: '30px', border: '2px solid #ddd', padding: '10px', borderRadius: '4px'}}>
        <PersonalInfo {...data.personalInfo} />
      </div>
      <Flex flexWrap={['wrap', 'nowrap', 'nowrap']} style={{marginBottom: '30px'}}>
        <Main flex={[null,2,2]}>
          <div style={{marginBottom: '50px'}}>
            <SkillsAndTech  {...data.skillsAndTech as SkillsAndTechProps} />
          </div>
          {data.workExperience && <WorkExperience {...data.workExperience} />}
        </Main>
        <Aside flex={1} flexDirection={'column'}>
          {data.educationInfo && <EducationInfo {...data.educationInfo} />}
        </Aside>
      </Flex>
      {data.portfolio && <Portfolio {...data.portfolio} />}
      
    </Template>
  )
}

export default TemplateLean;