import React from 'react';

const PersonalInfo = (props) => {

  return (
    <div className="p-info">
      <h1>{props.name}</h1>
      <h5><small>{props.position}</small></h5>
      <p>{props.brief}</p>
      <div>
        <div>
          <div>{props.email}<code>@</code>{props.emailEnd}</div>
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