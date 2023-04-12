import React from 'react';
import reactIcon from "../pictures/s4-reactIcon.svg";
import enableButton from "../pictures/switch.png";
import FourthSecProps from './FourthSecProps';
import { section4_1 } from './section34_prop_info';
import { section4_2 } from './section34_prop_info';


function MainFourthSection(abc) {
    return(
        <FourthSecProps 
        key={abc.key} 
        icon={abc.icon} 
        function={abc.function} 
        description={abc.description} />

    )
}

const FourthSection = () => {
  return (
    <section id="fourth-section">
        <div className='container-fluid container5'>

            <div className='row s4-row1 mx-auto'>

                <div className='s4-col1 col-lg-6 col-md-6 col-sm-12'>
                    {/* All circle's were designed here */}
                    <div className='circle1'>
                        <div className='circle2'>
                            <div className='circle3'>
                                <div className='circle4'>
                                    <img className='s4-reacticon' src={reactIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <img className='enableButton' src={enableButton} alt="" />
                        <p className='s4-p1'>✅</p>
                        <p className='s4-p2'>+</p>
                        <button className='btn btn-primary s4-button'>Sign Up</button>
                    </div>

                </div>

                <div className='s4-col2 col-lg-6 col-md-6 col-sm-12'>
                    <h1 style={{marginBottom: "48px"}}>Beautiful & consistant UI powered with <span style={{color: "#06d7ff"}}>React.</span></h1>

                    <div className='row s4-row2'>
                        {/* Linked with props card */}
                        {section4_1.map(MainFourthSection)}
                        {/* <FourthSecProps icon={section4[0].icon} function={section4[0].function} description={section4[0].description} />
                        <FourthSecProps icon={section4[1].icon} function={section4[1].function} description={section4[1].description} />
                        <FourthSecProps icon={section4[2].icon} function={section4[2].function} description={section4[2].description} /> */}


                    </div>

                    <div className='row'>
                        {/* Linked with props card */}
                        {section4_2.map(MainFourthSection)}
                        {/* <FourthSecProps icon={section4[3].icon} function={section4[3].function} description={section4[3].description} />
                        <FourthSecProps icon={section4[4].icon} function={section4[4].function} description={section4[4].description} />
                        <FourthSecProps icon={section4[5].icon} function={section4[5].function} description={section4[5].description} /> */}

                    </div>

                </div>

            </div>

        </div>
        <hr />
    </section>
  )
}

export default FourthSection;