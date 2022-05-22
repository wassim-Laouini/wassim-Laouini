import React from 'react'
import "./commun-component-style.css"
function SecondSectionHome() {
  return (
      /**** start of section 2 */

    <div className="section2"  >
      {  /***  beyond heightech background image */}
 <div className="section2-first-img">
     <h2> Build Beyond  <span> Hightech </span>  </h2>
 </div>-
 {  /*** End of  build beyond heightech background image */}

 {  /***  start of about  our company section */}
<div className='about-company-section' >
<div className="container">
<div className="about-text">
<h6 className='header' > About our Company </h6>
<h2> Providing your business with a quality IT service is our passion.  </h2>
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum dolor facilis iusto ab voluptate amet architecto commodi, quibusdam quisquam, accusamus quas veniam officiis deserunt! Odit culpa optio impedit! </p>
<div className='skills-container'>

        <div className="skills">

        <div className="skills-item"> <h6> IT Consulting <em>90%</em>  </h6>   </div>
        <div className="skills-progress">

        <div style={{width:"90%"}} className="progress"></div>
          </div>

         </div>
        <div className="skills">

        <div className="skills-item"> <h6> Virtual Workstation <em>70%</em>  </h6>   </div>
        <div className="skills-progress">

        <div style={{width:"70%"}} className="progress"></div>
          </div>

         </div>
         <div className="skills">

        <div className="skills-item"> <h6> Managed IT Service <em>80%</em>  </h6>   </div>
        <div  className="skills-progress">

        <div style={{width:"80%"}} className="progress"></div>
          </div>

         </div>

</div>
<div className="about-btn-box">
<a href="#about" className="about-btn"> Learn More </a>

</div>
</div>
<div className="about-image">

<img  src={require("../images/about-img.png")} alt="" />


</div>


</div>


</div>
{  /***  end of about our company section */}

{  /***  start of why you choose us section */}
<div className="chooseUs-section">
<div className="chooseUs-container">
<div className="chooseUs-img">
<img src={require("../images/choose-us.png")} alt="" />
</div>
<div className="chooseUs-text">
<h6> WHY CHOOSE US? </h6>
<h2> Safeguard your brand withCyber- Security & IT Solutions</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.

</p>
<ul className="features-list">
<li>  <span> Remote It Assistance</span> </li>
<li>  <span> Practice IT Management</span> </li>
<li>  <span> Managed IT Service</span> </li>
<li>  <span> Solving IT Problems</span> </li>
<li>     <span> IT Security Services</span> </li>
<li> <span> Cloud Services </span> </li>

</ul>

</div>

</div>



</div>

    </div>
  )
}

export default SecondSectionHome
