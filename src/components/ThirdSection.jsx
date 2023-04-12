import React from 'react';
import ThirdSecProps from './ThirdSecProps';
import {section3} from './section34_prop_info';


function MainThirdSection(abc) {
    return(
        <ThirdSecProps 
        key={abc.key} 
        icon={abc.icon}
        function={abc.function}
        description={abc.description}
        more={abc.more} />
    )
};

const ThirdSection = () => {
  return (
    <section id="third-section">
        <div className='container-fluid container3 mx-auto'>
            <p className='s3-p1'>Key features</p>
            <h1 style={{fontSize: "32px", fontWeight: "500"}}>Why use Atomize React? </h1>
            <p className='s3-p2'>Atomize React helps you in building fully responsive websites 
            and products that match your style.</p>
        </div>

        <div className="container-fluid container4">

            <div className='div s3-div'>
                {section3.map(MainThirdSection)}
                {/* <ThirdSecProps icon={section3[0].icon} function={section3[0].function} description={section3[0].description} more={section3[0].more}  />
                <ThirdSecProps icon={section3[1].icon} function={section3[1].function} description={section3[1].description} more={section3[1].more}  />
                <ThirdSecProps icon={section3[2].icon} function={section3[2].function} description={section3[2].description} more={section3[2].more}  />
                <ThirdSecProps icon={section3[3].icon} function={section3[3].function} description={section3[3].description} more={section3[3].more}  /> */}
            </div>
            </div>
            <hr />
    </section>
    
  )
}

export default ThirdSection;