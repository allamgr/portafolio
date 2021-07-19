import { ReactElement } from "react";
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

const getIcon = (name: string, style?: any) => {
  return techIconExists(name) ? TechIcons[name](style) : null;
};

export const TechIcon = (props: {name: string, svgStyle?: any}): JSX.Element | null => {
  return getIcon(tidy(props.name), props.svgStyle)
}