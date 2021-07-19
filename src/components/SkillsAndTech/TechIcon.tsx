import React from 'react';
import { tidy } from "../../shared/utils";
import { CSharpIcon, CSSIcon, JSIcon, LaravelIcon, MySqlIcon, NodejsIcon, PhpIcon, ReactIcon, SqlIcon, TSIcon } from "../../assests/icons";


const TechIcons: { [name: string]: (style?: any) => JSX.Element } = {
  'react': (style)=> <ReactIcon style={style} />,
  "php": (style)=> <PhpIcon style={style} />,
  "javascript": (style)=> <JSIcon style={style} />,
  "js": (style)=> <JSIcon style={style} />,
  "csharp": (style)=> <CSharpIcon style={style} />,
  "c#": (style)=> <CSharpIcon style={style} />,
  "css": (style)=> <CSSIcon style={style} />,
  "nodejs": (style)=> <NodejsIcon style={style} />,
  "node.js": (style)=> <NodejsIcon style={style} />,
  "typescript": (style)=> <TSIcon style={style} />,
  "ts": (style)=> <TSIcon style={style} />,
  "mysql": (style)=> <MySqlIcon style={style} />,
  "sql": (style)=> <SqlIcon style={style} />,
  "laravel": (style)=> <LaravelIcon style={style} />
}

export const techIconExists = (name: string): boolean => {
  return TechIcons.hasOwnProperty(tidy(name));
}

export const TechIcon = (props: { name: string, svgStyle?: any }): any => {

  let name = tidy(props.name);

  switch (name) {
    case 'react':
      return <ReactIcon style={props.svgStyle} />
    case "php": return <PhpIcon style={props.svgStyle} />
    case "javascript": return <JSIcon style={props.svgStyle} />
    case "js": return <JSIcon style={props.svgStyle} />
    case "csharp": return <CSharpIcon style={props.svgStyle} />
    case "c#": return <CSharpIcon style={props.svgStyle} />
    case "css": return <CSSIcon style={props.svgStyle} />
    case "nodejs":
    case "node.js": return <NodejsIcon style={props.svgStyle} />
    case "typescript": 
    case "ts": return <TSIcon style={props.svgStyle} />
    case "mysql": return <MySqlIcon style={props.svgStyle} />
    case "sql": return <SqlIcon style={props.svgStyle} />
    case "laravel": return <LaravelIcon style={props.svgStyle} />      
    default: return <span>Icon Not Found</span>
  }
}