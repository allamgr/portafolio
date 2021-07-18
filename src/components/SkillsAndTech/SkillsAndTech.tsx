import { Box, Flex } from "reflexbox"
import { CSharpIcon, CSSIcon, JSIcon, LaravelIcon, MySqlIcon, NodejsIcon, PhpIcon, ReactIcon, SqlIcon, TSIcon } from "../../assests/icons";

export interface TechProps {
  name: string,
  level: 'Basic' | 'Intermediate' | 'Advanced' | 'B' | 'I' | 'A',
  years?: number,
  logo?: SVGAElement
}

export interface SkillsAndTechProps {
  technologies: TechProps[]
}

const tidy = (string: string) => string.toLowerCase().trim();


const getIcon = (name: string) => {
  switch (tidy(name)) {
    case "react":
      return <ReactIcon />;
    case "php":
      return <PhpIcon />;
    case "javascript":
      return <JSIcon />;
    case "js":
      return <JSIcon />;
    case "csharp":
      return <CSharpIcon />;
    case "c#":
      return <CSharpIcon />;
    case "css":
      return <CSSIcon />;
    case "nodejs":
      return <NodejsIcon />;
    case "node.js":
      return <NodejsIcon />;
    case "typescript":
      return <TSIcon />;
    case "ts":
      return <TSIcon />;
    case "mysql":
      return <MySqlIcon />;
    case "sql":
      return <SqlIcon />;
    case "laravel":
      return <LaravelIcon />;
    default:
      return "";
  }
};

const TechIcon = (props: any): JSX.Element | null => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} style={{width: '50px', height: '50px'}} >{getIcon(props.name)}</Flex>
  )
}

export const SkillsAndTech = (props: SkillsAndTechProps): JSX.Element => {
  return (<div>
    <h2>🚀 Skills and Technologies</h2>

    <Flex flexWrap={'wrap'}>
      {
        props.technologies.map((t, i) => {
          return <Box style={{ border: '1px solid #ddd', padding:'5px', borderRadius:'4px', marginRight: '10px', marginBottom: '10px' }} display={'flex'} alignItems='center' justifyContent='center' flexDirection='column'>
            <TechIcon name={t.name}/>
            <span style={{color: '#00000099', fontSize: '0.8rem', marginTop: '10px'}}>{t.name}</span>
          </Box>
        })
      }
    </Flex>
  </div>)
}