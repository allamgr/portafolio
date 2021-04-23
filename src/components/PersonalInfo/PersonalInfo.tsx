import * as React from 'react';

export interface PersonalInfoProps {
  name: string;
  position?: string;
  brief?: string;
  email?: string;
  emailDomain?: string;
  location?: string;
  phone?: string;
  gender?: string;
  github?: string;
}

export const PersonalInfo = (props : PersonalInfoProps) : JSX.Element => {
  return (
    <div className="p-info">
      <h1>{props.name}</h1>
      <h5><small>{props.position}</small></h5>
      <p>{props.brief}</p>
      <div>
        <div>
          <div>{props.email}<code>@</code>{props.emailDomain}</div>
          <div>{props.location}</div>
          <div>{props.phone}</div>
          <div>{props.gender}</div>
          <div><a href={`https://github.com/${props.github}`}>{props.github}</a></div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;