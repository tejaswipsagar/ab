import React from 'react';
import {girlImage, heartIcon, eyeIcon, pencilIcon, 
    attachIcon, redplayIcon, downloadIcon, scenaryPic, girlImage2
    } from "../pictures/picExp"

const SecondSection = () => {
  return (
    <section id="second-section">
        <div className="container-fluid container2">

            <div className='main-card1'>
                    <div className="card1-icon-div">
                        <img className="card1-icon" src={heartIcon} alt="" />
                        <img className="card1-icon" src={eyeIcon} alt="" />
                        <img className="card1-icon" src={pencilIcon} alt="" />
                        <img className="card1-icon" src={attachIcon} alt="" />
                        <img className="card1-icon" src={redplayIcon} alt="" />
                        <img className="card1-icon download-icon" src={downloadIcon} alt="" />
                        
                    </div>
                    <div className="card1">
                        <img src={girlImage} alt="" />
                        <p style={{fontSize: "22px", fontWeight: "500", paddingTop: "40px", lineHeight: "2px"}}>Meagan Fisher</p>
                        <p style={{fontSize: "12px", color: "grey", marginBottom: "60px"}}>Engineering Manager</p>
                        <button className='btn btn-primary section2-button1'>Follow <span className='a'>+</span></button>
                        <button className='btn btn-light section2-button2'>Message</button>
                        
                    </div>
            </div>
                   
                     <div className="card2">
                        <img className="scenary-pic" src={scenaryPic} alt="" />
                            <div className='card2-sub'>
                            <img style={{width: "33px", borderRadius: "100%", marginRight: "16px"}} src={girlImage2} alt="" />
                            <h6 style={{fontSize: "14px", fontWeight: "500"}}>Meagan Fisher</h6>
                            <img className='card2-heart-icon' src={heartIcon} alt="" />
                            </div>
                     </div>

                    <div className="card3">
                        <h1 style={{fontSize: "22px", fontWeight: "500"}}>Login into your account</h1>
                        <p style={{fontSize: "12px", color: "grey", fontWeight: "500"}}>Don't have an account yet?<span style={{color: "#0284FE",cursor: "pointer"}}> Create New</span></p>
                        <form action="">
                            <input className='input1' type="email" name="" id="" placeholder="johndoe@gmail.com" />
                            <input className='input2' type="password" placeholder='Password' />
                            <button className='btn card3-button' type="submit">Login</button>
                        </form>
                    </div>
            
        </div>
            <hr />


    </section>
  )
}

export default SecondSection;