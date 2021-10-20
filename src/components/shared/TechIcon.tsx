import React, { CSSProperties } from 'react';
import { tidy } from "../../shared/utils";
import { CSharpIcon, CSSIcon, DockerIcon, HtmlIcon, JavaIcon, JSIcon, KubernetesIcon, LaravelIcon, MangentoIcon, MySqlIcon, NodejsIcon, PhpIcon, ReactIcon, ReduxIcon, RubyIcon, SassIcon, SqlIcon, SshIcon, StylusIcon, TSIcon, VagrantIcon } from "../../assests/icons";

export const TechIcon = (props: { name: string, svgStyle?: CSSProperties, notFound?: boolean, placeholder?: React.ReactNode }): any => {

  let name = tidy(props.name);
  const { placeholder } = props;

  switch (name) {
    case 'react': return <ReactIcon style={props.svgStyle} />
    case 'redux': return <ReduxIcon style={props.svgStyle} />
    case 'ruby': return <RubyIcon style={props.svgStyle} />
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
    case "stylus": return <StylusIcon style={props.svgStyle} />
    case "sass": return <SassIcon style={props.svgStyle} />
    case "scss": return <SassIcon style={props.svgStyle} />
    case "ssh": return <SshIcon style={props.svgStyle} />
    case "laravel": return <LaravelIcon style={props.svgStyle} />
    case "vagrant": return <VagrantIcon style={props.svgStyle} />
    case "linux": return <VagrantIcon style={props.svgStyle} />
    case "docker": return <DockerIcon style={props.svgStyle} />
    case "java": return <JavaIcon style={props.svgStyle} />
    case "kubernetes": return <KubernetesIcon style={props.svgStyle} />
    case "magento": return <MangentoIcon style={props.svgStyle} />
    case "html": return <HtmlIcon style={props.svgStyle} />
    case "html5": return <HtmlIcon style={props.svgStyle} />
    default: return props.notFound ? (props.placeholder ? <span>{placeholder}</span> : <span>Icon Not Found</span>) : null;
  }
}