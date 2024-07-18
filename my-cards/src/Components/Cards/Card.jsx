import "./Card.scss"
import Image from "../../assets/images/profile.png"
import Twitter from '../../assets/images/Twitter Icon.png'
import Facebook from '../../assets/images/Facebook Icon.png'
import Instagram from '../../assets/images/Instagram Icon.png'
import Github from '../../assets/images/GitHub Icon.png'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


const Card = () => {
  return (
    <div className="container">
      <div className="card-holder">
        <div className="card-container ">
          <img src={Image} alt="profile" />
          <div className="profile">
            <h4>Laura Smith</h4>
            <p>Frontend Developer</p>
            <a href="#">laurasmith.website</a>
          </div>
          <div className="button-container">
            <button className="social-link email" onClick={()=> {
               document.body.classList.add('lightmode')
            }}><MdEmail className="email-logo"/>Email</button>
            <button className="social-link linkedin" onClick={()=> {
               document.body.classList.remove('lightmode')
            }}><FaLinkedin className="linkedin-logo" />LinkedIn</button>

          </div>
          <div className="info-text">
            <h2 className="heading">About</h2>
            <p className="paragraph-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="heading">Interests</h2>
            <p className="paragraph-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
          <div className="links-container ">
             <img src={Twitter} alt="twittere" />
             <img src={Facebook} alt="facebook" />
             <img src={Instagram} alt="insta" />
             <img src={Github} alt="github" />


          </div>
        </div>
      </div>
    </div>
  );
}

export default Card