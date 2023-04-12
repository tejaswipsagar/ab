import React from 'react';

const ThirdSecProps = (props) => {
  return (
    <div className='s3-cards'>
        <img src={props.icon} />
        <h1 className='s3-h1'>{props.function}</h1>
        <p style={{color: "grey", fontSize: "17px"}}>{props.description}</p>
        <p style={{color: "#0284FE", cursor: "pointer", fontWeight: "500"}}>{props.more}</p>
    </div>
    
  )
}

export default ThirdSecProps;