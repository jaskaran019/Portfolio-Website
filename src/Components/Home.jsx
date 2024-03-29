// Importing Dependencies
import React, { useEffect, useState } from 'react'
import Typed from 'typed.js';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectCard from './ProjectCard';
import styles from '../styles/Home.module.css'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Importing Material Ui
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab'
// Importing Icons
import {RiTwitterXFill} from "react-icons/ri";
import {BsLinkedin} from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BiLogoFirebase, BiLogoNodejs } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { FaCss3 } from "react-icons/fa";
import { BiLogoHtml5 } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { BiLogoPython } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { BiArrowToRight } from "react-icons/bi";

const Home = () => {

  // Typing effect
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['ਸਤ ਸ੍ਰੀ ਅਕਾਲ!', 'Hello!'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // Handle Card Submit
  const [cardVisibilities, setCardVisibilities] = useState([]);

  // Function to toggle the visibility of a specific card
  const toggleVisibility = (index) => {
    const updatedVisibilities = [...cardVisibilities];
    updatedVisibilities[index] = !updatedVisibilities[index];
    setCardVisibilities(updatedVisibilities);
  };

  // OnScroll Animation

  useEffect(()=>{
    AOS.init({duration:1000, once:true});
  },[])

  // Formspree & Toastify
  
  const [state, handleSubmit] = useForm("mayglopb");
  useEffect(() => {
    if (state.succeeded) {
      // Show the toast notification when state.succeeded is true
      toast.success('Message Sent Successfuly!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
    }
  }, [state.succeeded]);

  return (
    <>
    <div className={styles.masterContainer}>
      <div className={styles.welcomeMessage}>
          <h3><span ref={el}></span> <img src="assets/folded-hands.png" alt="Folded hands" style={{width: 30, position: "relative", top:"5px"}}/></h3>
          <div className={styles.desc}>
            <p>I'm <span>Jaskaran Singh</span>,<br /> a web-developer based in Ludhiana, India. I love building beautiful interfaces, web-apps and everything in between.</p>
          </div>
          <div className={styles.linkContainer}>
            <ul className={styles.links}>
              <li className={styles.link}><a href="https://www.linkedin.com/in/jaskaran-singh-28a47019a/" target="_blank"><BsLinkedin/></a></li>
              <li className={styles.link}><a href="https://github.com/jaskaran019" target="_blank"><AiFillGithub/></a></li>
            </ul>
          </div>
          <p className={styles.email}>Get in Touch👉🏼<a href="mailto: workforjaskaran14@gmail.com">workforjaskaran14@gmail.com</a></p>
      </div>

      {/* Background Container */}

      <div className={styles.backgroundContainer} data-aos = "fade-up">
        <h3>BACKGROUND</h3>
        <p>I am a 4th Year student at <span>Chandigarh University</span> studying Bachelor's in Computer Science and Engineering. <br /><br />As a web developer, I enjoy the gap between engineering and design - combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging pixel-perfect user experience. <br /><br />Apart from my technical skills i am very good at negotiating and getting my way around people. And when i am not working, i love to watch movies and study Psychology. <br /><br /><a href="assets/Resume.pdf" download target="_blank">Download My Resume<BsDownload style={{fontWeight: "700", fontSize: "1.5em", position: "relative", top: "4px", marginLeft:".2em"}}/> </a></p>
      </div>

      {/* Skills Container */}

      <div className={styles.skillsContainer} data-aos = "fade-up">
        <h3>SKILLS</h3>
        <div className={styles.skillGrid}>
          <div className={styles.skillBox}>
            <BiLogoHtml5 className={styles.reactIcon}/>
            <h5>HTML</h5>
          </div>
          <div className={styles.skillBox}>
            <FaCss3 className={styles.reactIcon}/>
            <h5>CSS</h5>
          </div>
          <div className={styles.skillBox}>
            <BiLogoReact className={styles.reactIcon}/>
            <h5>React.js</h5>
          </div>
          <div className={styles.skillBox}>
            <BiLogoNodejs className={styles.reactIcon}/>
            <h5>Node.js</h5>
          </div>
          <div className={styles.skillBox}>
            <SiExpress className={styles.reactIcon}/>
            <h5>Express.js</h5>
          </div>
          <div className={styles.skillBox}>
            <AiFillGithub className={styles.reactIcon}/>
            <h5>Git</h5>
          </div>
          <div className={styles.skillBox}>
            <BiLogoJavascript className={styles.reactIcon}/>
            <h5>Javascript</h5>
          </div>
          <div className={styles.skillBox}>
            <BiLogoFirebase className={styles.reactIcon}/>
            <h5>Firebase</h5>
          </div>
          <div className={styles.skillBox}>
            <TbBrandCpp className={styles.reactIcon}/>
            <h5>CPP</h5>
          </div>
          <div className={styles.skillBox}>
            <TbSql className={styles.reactIcon}/>
            <h5>SQL</h5>
          </div>
          <div className={styles.skillBox}>
            <BiLogoPython className={styles.reactIcon}/>
            <h5>Python</h5>
          </div>
        </div>
      </div>

      {/* Projects Container */}

      <div className={styles.projectsContainer} data-aos = "fade-up">
        <h3>PROJECTS</h3>
        <div className={styles.projectsMasterContainer}>
        <Timeline>
          <TimelineItem>
          <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "rgb(23, 101, 179)"}}/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              {/* Project 1 */}

          <div className={styles.projectDesc}>
            <h4 className={styles.projectTitle}>Chatwiz : Realtime Chat Application <BsArrowRight className={styles.rightArrow}/></h4>
            <p>A cutting-edge chat application with advanced security features to allow seamless real-time communication and online status verification with email-verification and normalization to prevent duplicity</p>
            <ul className={styles.projectSkillList}>
              <li className={styles.projectSkill}>HTML</li>
              <li className={styles.projectSkill}>CSS</li>
              <li className={styles.projectSkill}>Javascript</li>
              <li className={styles.projectSkill}>Ajax</li>
            </ul>  
          <button className={styles.knowMoreBtn} onClick={()=>toggleVisibility(0)}>Know More <BiArrowToRight/></button>
          {cardVisibilities[0] && <ProjectCard 
          img1 = "assets/Chatwiz-1.png" 
          img2 = "assets/Chatwiz-2.png" 
          img3 = "assets/Chatwiz-3.png" 
          cardTitle = "Chatwiz : Realtime Chat Application" 
          skills = "HTML CSS Javascript" 
          teamSize = "4"
          timeline = "February 2023-June 2023"
          projectLink = "https://github.com/jaskaran019/Chatwiz"
          desc = {
            <>
              A cutting-edge chat application with advanced security features to allow seamless real-time communication and online status verification with email-verification and normalization to prevent duplicity.
            </>
          }
          />}
          
          </div>
          <div><p><br /><br /></p></div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "rgb(23, 101, 179)"}}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {/* Project 2 */}
          <div className={styles.projectDesc}>
            <h4 className={styles.projectTitle}>Resumate : Online Resume Maker<BsArrowRight className={styles.rightArrow}/></h4>
            <p>Web-based Resume Maker application for a resume making. Integrated the front-end with the back-end to streamline user registration and offer industry-standard templates for rapid resume creation.</p>
            <ul className={styles.projectSkillList}>
              <li className={styles.projectSkill}>HTML</li>
              <li className={styles.projectSkill}>CSS</li>
              <li className={styles.projectSkill}>Javascript</li>
              <li className={styles.projectSkill}>MongoDB</li>
            </ul>
            <button className={styles.knowMoreBtn} onClick={()=> toggleVisibility(1)}>Know More <BiArrowToRight/></button>
            {cardVisibilities[1] && <ProjectCard 
            img1 = "assets/Resumate-1.png" 
            img2 = "assets/Resumate-2.png" 
            img3 = "assets/Resumate-3.png" 
            cardTitle = "Resumate : Online Resume Maker"
            skills = "HTML CSS Javascript"
            teamSize = "5"
            timeline = "September 2022-December 2022" 
            projectLink = "https://github.com/jaskaran019/Resumate.github.io"
            desc = {
              <>
                Resumate is a user-friendly website designed to streamline the resume-building process, enabling individuals to create job-ready resumes in just 10 minutes.<br /><br/>
                With Resumate, users are required to input their relevant information into a straightforward form, and within a short span of time, they receive a professionally crafted and ATS (Applicant Tracking System) compatible resume.<br /><br />
                The platform offers a diverse range of meticulously researched templates, specifically chosen to cater to various job roles and industries, providing users with the flexibility to select from a selection of five templates.<br /><br />
                Resumate simplifies and accelerates the resume creation process, helping individuals put their best foot forward in their job applications.
              </>
              }
            />
            }
          </div>  
          <div><p><br /><br /></p></div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "rgb(23, 101, 179)"}}/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              {/* Project 3 */}
              <div className={styles.projectDesc}>
                <h4 className={styles.projectTitle}>Clubhouse Clone<BsArrowRight className={styles.rightArrow}/></h4>
                <p>Clubhouse-inspired React.js project featuring routers, switches, and dual layouts for a unique social audio experience. Join rooms, interact, and enjoy seamless navigation in this immersive app clone.</p>
                <ul className={styles.projectSkillList}>
                  <li className={styles.projectSkill}>React.js</li>
                </ul>
                <button className={styles.knowMoreBtn} onClick={()=>toggleVisibility(2)}>Know More <BiArrowToRight/></button>
              {cardVisibilities[2] && <ProjectCard 
              img1 = "assets/Clubhouse-1.png" 
              img2 = "assets/Clubhouse-2.png" 
              img3 = "assets/Clubhouse-3.png" 
              cardTitle = "Clubhouse Clone" 
              skills = "React.js" 
              teamSize = "1" 
              timeline ="August 2023"
              projectLink = "https://github.com/jaskaran019/Clubhouse-Clone"
              desc ={
                <>
                  Clubhouse-inspired React.js project featuring routers, switches, and dual layouts for a unique social audio experience. <br />Join rooms, interact, and enjoy seamless navigation in this immersive app clone. <br /><br />The app featured:
                  <ol style={{marginLeft:"2em", marginTop:"1em"}}>
                    <li>Welcome Page</li>
                    <li>Registration Page</li>
                    <li>OTP Verification Page</li>
                    <li>Home Page</li>
                    <li>Clubhouse Room Page</li>
                    <li>Profile Page</li>
                  </ol>
                </>
              }/>}
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>  
        </div>
      </div>
      <p style={{marginTop:"4em", fontWeight:"600"}}>Check my other projects on Github. </p>
      {/* Contact */}
    <div className={styles.contactContainer} data-aos = "fade-up">
      <h3>DROP A MESSAGE</h3>
      <div className={styles.contactFormSubContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>Your Name<br/><input type="text" name="name" className = {styles.formInput} placeholder="Enter your Name"/></label>
            <label>Email Address <br/><input type="email" name="email" className = {styles.formInput} placeholder="Enter your Email Address"/></label>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
            <label>Message <br/><textarea name="message" cols="20" rows="5" charswidth="23" style={{resize:"none"}} placeholder="Write your message here"></textarea></label>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button type="submit" disabled={state.submitting}>Submit</button>
          </form>
      </div>
    </div>
    </div>
    <ToastContainer />
    {/* Footer */}
    <div className={styles.footer}>
        <p>Created by <br />Jaskaran Singh🤟🏼2023</p>
        <ul className={styles.footerSocialList}>
          <li className={styles.footerSocialItem}><a href="mailto: workforjaskaran14@gmail" target='_blank'>Email</a></li>
          <li className={styles.footerSocialItem}><a href="https://github.com/jaskaran019" target='_blank'>Github</a></li>
          <li className={styles.footerSocialItem}><a href="https://www.linkedin.com/in/jaskaran-singh-28a47019a/" target='_blank'>LinkedIn</a></li>
          <li className={styles.footerSocialItem}><a href="https://twitter.com/jaskaran_019" target='_blank'>Twitter</a></li>
        </ul>
      </div>
    </>
  )
}

export default Home