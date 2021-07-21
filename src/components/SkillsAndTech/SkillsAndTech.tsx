import React from 'react';
import { Box, Flex } from "reflexbox";
import styled from "styled-components";
import { tidy } from "../../shared/utils";
import { TechItem, TechItemContainer, TechLabel, TechLevel, TechLevelBadge, TechLevelContainer, TechLevelDesc } from "./styles";
import { TechIcon } from "../shared/TechIcon";

type TECH_LEVEL = { label: string, key:string, color:string}

const BASIC_LEVEL : TECH_LEVEL = { label: 'Basic', key: 'b', color: '#959595' };
const INTERMEDIATE_LEVEL : TECH_LEVEL = { label: 'Intermediate', key: 'i', color: '#007fd9' };
const ADVANCED_LEVEL : TECH_LEVEL = { label: 'Advanced', key: 'a', color: '#1acd2d' };

export interface TechProps {
  name: string,
  level: 'basic' | 'intermediate' | 'advanced' | 'B' | 'I' | 'A' | 'b' | 'i' | 'a',
  years?: number,
  logo?: SVGAElement
}

const TechLevelDictionary : { [name: string]: TECH_LEVEL } = {
  'basic': BASIC_LEVEL,
  'b': BASIC_LEVEL,
  'advanced': ADVANCED_LEVEL,
  'a': ADVANCED_LEVEL,
  'intermediate': INTERMEDIATE_LEVEL,
  'i': INTERMEDIATE_LEVEL,
}
export interface SkillsAndTechProps {
  technologies: TechProps[]
}

const getTechLevelByLevel = (level: string) : TECH_LEVEL | undefined => {
  let levelKey = tidy(level);
  if (TechLevelDictionary.hasOwnProperty(levelKey)) {
    return TechLevelDictionary[levelKey];
  }
  return undefined;
}

const TechLevelLabel = (props: any): JSX.Element => {
  let techLevel = getTechLevelByLevel(props.level);
  if (techLevel) {
    return <TechLevelBadge style={{ backgroundColor: techLevel.color, ...(props.style ? props.style : null) }}>{techLevel.key.toUpperCase()}</TechLevelBadge>
  }
  return <TechLevelBadge>-</TechLevelBadge>
}

export const SkillsAndTech = (props: SkillsAndTechProps): JSX.Element => {
  return (<div>
    <h2>🚀 Skills and Technologies</h2>
    <TechLevelContainer flexWrap={'wrap'}>
      <TechLevel><TechLevelLabel level={'a'}/><TechLevelDesc>Advanced</TechLevelDesc></TechLevel>
      <TechLevel><TechLevelLabel level={'i'}/><TechLevelDesc>Intermediate</TechLevelDesc></TechLevel>
      <TechLevel><TechLevelLabel level={'b'}/><TechLevelDesc>Basic</TechLevelDesc></TechLevel>
    </TechLevelContainer>
    <Flex flexWrap={'wrap'}>
      {
        props.technologies && props.technologies.map((t, i) => {
          let techLevel = getTechLevelByLevel(t.level);
          let title = `${t.name}${(techLevel ? ` (${techLevel.label})` : '')}`

          return <TechItemContainer key={i} title={title}>
            <TechItem>
              <TechIcon name={t.name} svgStyle={{ width: '50px', height: '50px' }} notFound={true} placeholder={<TechLabel>{t.name}</TechLabel> } />
            </TechItem>
            <TechLevelLabel level={t.level} style={{position: 'absolute',zIdex:2, top: '-7.5px', right:'-7.5px', marginRight:0}}/>
          </TechItemContainer>
        })
      }
    </Flex>
  </div>)
}