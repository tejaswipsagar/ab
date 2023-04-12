import React from 'react';

const FourthSecProps = (props) => {
  return (
    <div className='col-lg-4 col-md-4 col-sm-6'>
      <img src={props.icon} alt="" style={{paddingBottom: "20px"}} />
      <p style={{fontSize: "17px", fontWeight: "500"}}>{props.function}</p>
      <p style={{fontSize: "14px", color: "grey"}}>{props.description}</p>

    </div>
  )
}

export default FourthSecProps;