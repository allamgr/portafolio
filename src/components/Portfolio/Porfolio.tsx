import { TechIcon } from "../shared/TechIcon";
import { ProjectContainer, ProjectDescription, ProjectDetails, ProjectDuration, ProjectPreview, ProjectPreviewContainer, ProjectStack, ProjectStackContainer, ProjectTitle } from "./styles";

//TODO: Finish portfolio rendering
//Include project images slider with zoom
//Filter by stack
//Get project url working
//Add github url

export const FALLBACK_LOGO_URL = "https://dummyimage.com/500x350/cecece/333333.png&text=";

export interface ProjectProps {
  name: string,
  desc?: string,
  url?: string,
  github?: string,
  stack?: string[],
  thumbnailUrl?: string,
  images?: string[],
  startYear: number,
  endYear?: number | 'present'
}

export interface PortfolioProps {
  projects: Array<ProjectProps>
}

export const Portfolio = (props: PortfolioProps): JSX.Element => {
  return (<div>
    <h2>💻 Portfolio</h2>
    <div>
      {
        props.projects && props.projects.map((p, i) => {
          let title = `${p.name}`
          let duration = `${p.startYear}${p.endYear ? ' - ' : ''}${p.endYear === 'present' ? `Present` : (p.endYear ? p.endYear : '')}`
          let projectPreview = `${FALLBACK_LOGO_URL}${p.name}`;

          return <ProjectContainer key={i}>
            {/* {
              p.thumbnailUrl && <ProjectPreviewContainer>
                <ProjectPreview src={projectPreview} />
              </ProjectPreviewContainer>
            } */}
            
            <ProjectDetails flex={1}>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDuration>{duration}</ProjectDuration>
              {p.desc && <ProjectDescription><strong>Description:</strong> {p.desc}</ProjectDescription>}

              {
                p.stack && <ProjectStackContainer flexWrap={'wrap'}>
                  {
                    p.stack.map((stack, si) => {
                      return <ProjectStack justifyContent='center' alignItems='center' key={si}><TechIcon name={stack} svgStyle={{ marginRight: '5px', width: '20px', height: '20px' }} /><span>{stack}</span></ProjectStack>
                    })
                  }
                </ProjectStackContainer>
              }
            </ProjectDetails>
          </ProjectContainer>
        })
      }
    </div>
  </div>)
}